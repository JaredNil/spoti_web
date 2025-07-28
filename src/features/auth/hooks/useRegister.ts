import { useNavigate } from 'react-router-dom';

import { publicRqClient } from '@/shared/openapi/instance';
import type { ApiSchemas } from '@/shared/openapi/schema';
import { ROUTES } from '@/shared/routes/routes';
import { useSession } from '@/shared/session/session';

export function useRegister() {
  const navigate = useNavigate();

  const session = useSession();
  const registerMutation = publicRqClient.useMutation(
    'post',
    '/auth/register',
    {
      onSuccess(data) {
        session.login(data.accessToken);
        navigate(ROUTES.HOME);
      },
    }
  );

  const register = (data: ApiSchemas['RegisterRequest']) => {
    registerMutation.mutate({ body: data });
  };

  const errorMessage = registerMutation.isError
    ? registerMutation.error.message
    : undefined;

  return {
    register,
    isPending: registerMutation.isPending,
    errorMessage,
  };
}
