import type { IdleViewState } from '.';
import type { ViewModelParams } from '../../viewModelParams';
import { goToNodesDragging } from '../nodesDragging';
import { distanceFromPoints } from '@/features/board/model/point';
import { pointOnScreenToCanvas } from '@/features/board/model/screenToCanvas';

export function useGoToNodesDragging({
  canvasRect,
  setViewState,
  windowPositionModel,
}: ViewModelParams) {
  const handleWindowMouseMove = (idleState: IdleViewState, e: MouseEvent) => {
    if (
      idleState.mouseDown &&
      idleState.mouseDown.type === 'node' &&
      !idleState.mouseDown.isRightClick
    ) {
      const currentPoint = pointOnScreenToCanvas(
        {
          x: e.clientX,
          y: e.clientY,
        },
        windowPositionModel.position,
        canvasRect
      );

      if (distanceFromPoints(idleState.mouseDown, currentPoint) > 5) {
        setViewState(
          goToNodesDragging({
            startPoint: idleState.mouseDown,
            endPoint: currentPoint,
            nodesToMove: new Set([
              ...idleState.selectedIds,
              idleState.mouseDown.nodeId,
            ]),
          })
        );
      }
    }
  };

  return {
    handleWindowMouseMove,
  };
}
