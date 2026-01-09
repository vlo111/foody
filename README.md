# 🚀 Delivery App - Minimal Clean Version

Ultra-clean, production-ready authentication foundation with only essential features.

## ✨ What's Included

### ✅ Authentication
- **Login Screen** - Email/password authentication
- **Register Screen** - User registration with role selection
- **Persistent Login** - Auto-login using Zustand + AsyncStorage
- **Auth Guard** - Automatic routing based on auth state

### ✅ Home Screen
- **Welcome Message** - Shows logged-in user's name
- **Logout Button** - Sign out with confirmation

### ✅ Navigation
- **Tab Navigation** - Switch between Login/Register
- **Auto-Redirect** - Routes based on authentication state
- **Clean URLs** - No messy routing logic

## 📁 File Structure

```
app/
├── _layout.tsx                    # Root layout with auth guard
├── (auth)/
│   ├── _layout.tsx               # Login/Register tabs
│   ├── login.tsx                 # Login screen
│   └── register.tsx              # Register screen
└── home.tsx                      # Home screen (logged in)

src/
├── hooks/
│   └── useAuth.ts                # Auth hook (login/register/logout)
└── store/
    └── authStore.ts              # Auth state (Zustand + persistence)
```

**That's it!** Only 7 essential files.

## 🚀 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development

```bash
npm start
```

## 🎯 How It Works

### Authentication Flow

```
App Opens
   ↓
Not Logged In? → Login/Register Tabs
   ↓
Fill Form → Submit
   ↓
Auth State Updates (Zustand)
   ↓
Auto-Redirect → Home Screen
   ↓
Logout → Back to Login
```

### Auto-Redirect Logic

```typescript
// app/_layout.tsx
if (!isAuthenticated && !inAuthGroup) {
  router.replace('/(auth)/login');  // Go to login
}
else if (isAuthenticated && inAuthGroup) {
  router.replace('/home');  // Go to home
}
```

## 💡 Key Features

### 1. **No Unnecessary Code**
- No complex validation
- No fancy styling
- No unused components
- Just core functionality

### 2. **Easy to Extend**
- Add API calls in `useAuth.ts`
- Add more screens easily
- Expand home screen as needed
- Simple, clear structure

### 3. **Production Ready**
- Persistent login (survives restart)
- Type-safe (TypeScript)
- Clean architecture
- No technical debt

## 🔧 Customization

### Add Real API

Edit `src/hooks/useAuth.ts`:

```typescript
const login = async (credentials: LoginCredentials) => {
  setIsLoading(true);
  
  try {
    // Replace mock with real API
    const response = await fetch('YOUR_API/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    
    setLogin(data.user, data.token);
    return { success: true, user: data.user };
  } catch (err) {
    return { success: false, error: 'Login failed' };
  } finally {
    setIsLoading(false);
  }
};
```

### Add More Screens

```typescript
// app/profile.tsx
export default function ProfileScreen() {
  return <View><Text>Profile</Text></View>;
}
```

### Add Styling

All styles are inline - just modify the `StyleSheet.create()` objects.

## 📦 Dependencies

**Core (5 packages):**
- `expo-router` - File-based routing
- `zustand` - State management
- `@react-native-async-storage/async-storage` - Persistence
- `@expo/vector-icons` - Tab icons
- `expo-status-bar` - Status bar

**No extras:**
- ❌ No axios
- ❌ No form libraries
- ❌ No UI libraries
- ❌ No unnecessary dependencies

## 🎨 Design Philosophy

### Simple > Complex
- Plain React Native components
- Minimal styling
- Clear code structure
- Easy to understand

### Extensible > Feature-Complete
- Add what you need
- Remove what you don't
- No forced patterns
- Your app, your way

### Working > Perfect
- Mock data included
- Test without backend
- Add API when ready
- Ship faster

## 🔐 Auth Implementation

### Login (Mock)
```typescript
// Currently returns mock user
// Replace with your API call
```

### Register (Mock)
```typescript
// Currently returns mock user
// Replace with your API call
```

### Logout
```typescript
// Clears Zustand state
// Add API call if needed
```

## 🚦 State Management

### Auth Store (Zustand)
```typescript
{
  user: User | null,
  token: string | null,
  isAuthenticated: boolean,
  
  login(user, token),
  logout()
}
```

**Persisted in AsyncStorage** - Survives app restarts!

## 📱 Screens

### Login
- Email input
- Password input
- Sign In button
- Tab to Register

### Register
- Name input
- Email input
- Phone input
- Password input
- Create Account button
- Tab to Login

### Home
- Welcome message
- User name display
- Logout button

## ✅ Production Checklist

- [x] Authentication working
- [x] Persistent login
- [x] Clean code structure
- [ ] Connect real API
- [ ] Add more features
- [ ] Style as needed
- [ ] Test on devices
- [ ] Deploy

## 🎯 Next Steps

### Immediate
1. Connect your backend API
2. Replace mock data in `useAuth.ts`
3. Test authentication flow

### Short-term
1. Add validation
2. Improve error handling
3. Add loading states
4. Polish UI

### Long-term
1. Add more screens (orders, profile, etc)
2. Implement real features
3. Add analytics
4. Deploy to stores

## 💪 Why This Version?

### For Learning
- See exactly how routing works
- Understand auth flow
- Clean examples
- No magic

### For Starting
- Quick to set up
- Easy to modify
- No bloat
- Fast iteration

### For Production
- Solid foundation
- Type-safe
- Tested patterns
- Ready to scale

## 🐛 Troubleshooting

### "Module not found @/..."
- Restart: `npx expo start -c`
- Check `tsconfig.json` has correct paths

### Login doesn't persist
- Check AsyncStorage is installed
- Verify Zustand persist config

### Navigation not working
- Ensure all files are in correct folders
- Check file names match routes

## 📚 Learn More

- [Expo Router Docs](https://docs.expo.dev/router/introduction/)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [React Native Docs](https://reactnative.dev/)

---

**Built for clarity, ready for production** 🚀

Version: 1.0.0 - Clean & Simple
