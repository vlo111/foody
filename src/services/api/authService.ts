const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000/api";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface LoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: "customer" | "driver" | "admin";
    phone?: string;
    avatar?: string;
  };
  token: string;
}

export interface RegisterResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: "customer" | "driver" | "admin";
    phone?: string;
  };
  token: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginAPI = async (
  email: string,
  password: string
): Promise<ApiResponse<LoginResponse>> => {
  try {
    await delay(1000);

    if (!email || !password) {
      return {
        success: false,
        error: "Email and password are required",
      };
    }

    return {
      success: true,
      data: {
        user: {
          id: "1",
          email,
          name: "Test User",
          role: "customer",
          phone: "+1234567890",
        },
        token: "mock-jwt-token-" + Date.now(),
      },
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Login failed",
    };
  }
};

export const registerAPI = async (
  name: string,
  email: string,
  phone: string,
  password: string,
  role: "customer" | "driver"
): Promise<ApiResponse<RegisterResponse>> => {
  try {
    await delay(1500);

    if (!email || !password || !name) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    return {
      success: true,
      data: {
        user: {
          id: Date.now().toString(),
          email,
          name,
          role,
          phone,
        },
        token: "mock-jwt-token-" + Date.now(),
      },
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Registration failed",
    };
  }
};

export const logoutAPI = async (token: string): Promise<ApiResponse<null>> => {
  try {
    await delay(500);

    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Logout failed",
    };
  }
};

export const verifyTokenAPI = async (
  token: string
): Promise<ApiResponse<LoginResponse>> => {
  try {
    await delay(500);

    return {
      success: true,
      data: {
        user: {
          id: "1",
          email: "test@example.com",
          name: "Test User",
          role: "customer",
        },
        token,
      },
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Token verification failed",
    };
  }
};