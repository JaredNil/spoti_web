console.log('TypeScript Type Extraction from typeof Object Demo');

// 1. Исходный объект
const userProfile = {
  id: 101,
  username: 'typescript_guru',
  email: 'guru@example.com',
  settings: {
    theme: 'dark',
    notifications: true,
    language: 'en',
  },
  roles: ['admin', 'editor'],
};

// ✅ Способ 1: Использование `type` (рекомендуемый)
console.log('\n--- Using `type` alias (Recommended) ---');
type UserProfileType = typeof userProfile;

const anotherProfile: UserProfileType = {
  id: 102,
  username: 'react_fan',
  email: 'fan@example.com',
  settings: {
    theme: 'light',
    notifications: false,
    language: 'de',
  },
  roles: ['viewer'],
};

console.log('`anotherProfile` created successfully with UserProfileType.');

// 억 Способ 2: Использование `interface` через наследование
console.log('\n--- Using `interface` via extends (Workaround) ---');

// Сначала создаем псевдоним типа
type BaseProfileType = typeof userProfile;

// Затем создаем интерфейс, который его расширяет
interface IUserProfile extends BaseProfileType {
  // Можно добавить новые свойства, специфичные для интерфейса
  lastActive: Date;
}

const extendedProfile: IUserProfile = {
  id: 103,
  username: 'fullstack_dev',
  email: 'dev@example.com',
  settings: {
    theme: 'system',
    notifications: true,
    language: 'en',
  },
  roles: ['admin', 'developer'],
  lastActive: new Date(),
};

console.log('`extendedProfile` created successfully with IUserProfile interface.');

// Демонстрация работы функции с новым типом
function displayUserProfile(profile: UserProfileType) {
  console.log(`\nDisplaying profile for: ${profile.username}`);
  console.log(`Theme setting: ${profile.settings.theme}`);
}

displayUserProfile(anotherProfile);
displayUserProfile(extendedProfile); // Работает, так как `extendedProfile` совместим с `UserProfileType`

console.log('\n✅ Demonstration complete!');

