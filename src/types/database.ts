export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      gyms: {
        Row: {
          id: string
          name: string
          logo_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          logo_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          logo_url?: string | null
          created_at?: string
        }
      }
      plans: {
        Row: {
          id: string
          gym_id: string | null
          name: string
          price: number
          description: string | null
          features: string[]
          is_popular: boolean
          created_at: string
        }
        Insert: {
          id?: string
          gym_id?: string | null
          name: string
          price: number
          description?: string | null
          features?: string[]
          is_popular?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          gym_id?: string | null
          name?: string
          price?: number
          description?: string | null
          features?: string[]
          is_popular?: boolean
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          gym_id: string | null
          author_name: string
          content: string
          author_role: string | null
          avatar_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          gym_id?: string | null
          author_name: string
          content: string
          author_role?: string | null
          avatar_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          gym_id?: string | null
          author_name?: string
          content?: string
          author_role?: string | null
          avatar_url?: string | null
          created_at?: string
        }
      }
      settings: {
        Row: {
          id: string
          gym_id: string | null
          whatsapp_number: string | null
          hero_title: string | null
          hero_subtitle: string | null
          hero_video_url: string | null
          address: string | null
          contact_email: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          gym_id?: string | null
          whatsapp_number?: string | null
          hero_title?: string | null
          hero_subtitle?: string | null
          hero_video_url?: string | null
          address?: string | null
          contact_email?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          gym_id?: string | null
          whatsapp_number?: string | null
          hero_title?: string | null
          hero_subtitle?: string | null
          hero_video_url?: string | null
          address?: string | null
          contact_email?: string | null
          updated_at?: string
        }
      }
    }
  }
}
