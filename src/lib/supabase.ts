/* eslint-disable @typescript-eslint/no-explicit-any */
// Mock do Supabase para versão preview (sem banco de dados)
const mockResponse = { data: [], error: null, count: 0 };
const mockSingleResponse = { data: null, error: null };

const chainableMock = {
  select: () => chainableMock,
  insert: () => chainableMock,
  update: () => chainableMock,
  upsert: () => chainableMock,
  delete: () => chainableMock,
  eq: () => chainableMock,
  neq: () => chainableMock,
  gt: () => chainableMock,
  lt: () => chainableMock,
  gte: () => chainableMock,
  lte: () => chainableMock,
  like: () => chainableMock,
  ilike: () => chainableMock,
  is: () => chainableMock,
  in: () => chainableMock,
  contains: () => chainableMock,
  containedBy: () => chainableMock,
  range: () => chainableMock,
  abortSignal: () => chainableMock,
  single: async () => mockSingleResponse,
  maybeSingle: async () => mockSingleResponse,
  order: () => chainableMock,
  limit: () => chainableMock,
  rangeAdj: () => chainableMock,
  then: (resolve: any) => resolve(mockResponse),
};

export const supabase = {
  auth: {
    getSession: async () => ({ 
      data: { session: { user: { email: "admin@swell.com" } } }, 
      error: null 
    }),
    signInWithPassword: async () => ({ 
      data: { user: { email: "admin@swell.com" }, session: {} }, 
      error: null 
    }),
    signOut: async () => ({ error: null }),
    onAuthStateChange: () => ({ 
      data: { subscription: { unsubscribe: () => {} } } 
    }),
    getUser: async () => ({ data: { user: { email: "admin@swell.com" } }, error: null }),
  },
  from: () => chainableMock,
  storage: {
    from: () => ({
      getPublicUrl: () => ({ data: { publicUrl: "" } }),
    }),
  },
} as any;

