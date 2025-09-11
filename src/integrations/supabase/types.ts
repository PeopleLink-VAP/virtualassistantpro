export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          published_at: string
          slug: string
          status: string | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string
          slug: string
          status?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          published_at?: string
          slug?: string
          status?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      course_registrations: {
        Row: {
          contacted_at: string | null
          created_at: string | null
          email: string
          experience: string | null
          full_name: string
          id: string
          motivation: string | null
          notes: string | null
          phone: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          contacted_at?: string | null
          created_at?: string | null
          email: string
          experience?: string | null
          full_name: string
          id?: string
          motivation?: string | null
          notes?: string | null
          phone: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          contacted_at?: string | null
          created_at?: string | null
          email?: string
          experience?: string | null
          full_name?: string
          id?: string
          motivation?: string | null
          notes?: string | null
          phone?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      email_template_usage: {
        Row: {
          id: string
          recipient_email: string | null
          sent_at: string | null
          template_id: string
          used_for: string | null
          variables_used: Json | null
        }
        Insert: {
          id?: string
          recipient_email?: string | null
          sent_at?: string | null
          template_id: string
          used_for?: string | null
          variables_used?: Json | null
        }
        Update: {
          id?: string
          recipient_email?: string | null
          sent_at?: string | null
          template_id?: string
          used_for?: string | null
          variables_used?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "email_template_usage_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      email_template_variables: {
        Row: {
          created_at: string | null
          default_value: string | null
          description: string | null
          id: string
          is_required: boolean | null
          template_id: string
          variable_name: string
          variable_type: string
        }
        Insert: {
          created_at?: string | null
          default_value?: string | null
          description?: string | null
          id?: string
          is_required?: boolean | null
          template_id: string
          variable_name: string
          variable_type?: string
        }
        Update: {
          created_at?: string | null
          default_value?: string | null
          description?: string | null
          id?: string
          is_required?: boolean | null
          template_id?: string
          variable_name?: string
          variable_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_template_variables_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          html_content: string
          id: string
          is_active: boolean | null
          name: string
          subject: string
          template_type: string
          text_content: string | null
          updated_at: string | null
          variables: Json | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          html_content: string
          id?: string
          is_active?: boolean | null
          name: string
          subject: string
          template_type?: string
          text_content?: string | null
          updated_at?: string | null
          variables?: Json | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          html_content?: string
          id?: string
          is_active?: boolean | null
          name?: string
          subject?: string
          template_type?: string
          text_content?: string | null
          updated_at?: string | null
          variables?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "email_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      membership_tiers: {
        Row: {
          created_at: string
          description: string | null
          features: string[] | null
          id: string
          name: string
          price: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          name: string
          price?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          features?: string[] | null
          id?: string
          name?: string
          price?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      newsletter_campaigns: {
        Row: {
          click_rate: number | null
          content: string | null
          created_at: string | null
          created_by: string | null
          id: string
          open_rate: number | null
          scheduled_at: string | null
          sent_at: string | null
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          click_rate?: number | null
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          open_rate?: number | null
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          click_rate?: number | null
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          open_rate?: number | null
          scheduled_at?: string | null
          sent_at?: string | null
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      newsletter_email_list_members: {
        Row: {
          added_at: string | null
          id: string
          list_id: string
          profile_id: string
        }
        Insert: {
          added_at?: string | null
          id?: string
          list_id: string
          profile_id: string
        }
        Update: {
          added_at?: string | null
          id?: string
          list_id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_email_list_members_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "newsletter_email_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "newsletter_email_list_members_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      newsletter_email_lists: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          filter_criteria: Json | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          filter_criteria?: Json | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          filter_criteria?: Json | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_email_lists_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      newsletter_interactions: {
        Row: {
          event: string
          id: string
          occurred_at: string | null
          recipient_id: string
          url: string | null
          user_agent: string | null
        }
        Insert: {
          event: string
          id?: string
          occurred_at?: string | null
          recipient_id: string
          url?: string | null
          user_agent?: string | null
        }
        Update: {
          event?: string
          id?: string
          occurred_at?: string | null
          recipient_id?: string
          url?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_interactions_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "newsletter_recipients"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_recipients: {
        Row: {
          campaign_id: string
          click_count: number | null
          click_last: string | null
          email: string
          id: string
          list_id: string | null
          open_count: number | null
          open_last: string | null
          profile_id: string | null
          sent_at: string | null
        }
        Insert: {
          campaign_id: string
          click_count?: number | null
          click_last?: string | null
          email: string
          id?: string
          list_id?: string | null
          open_count?: number | null
          open_last?: string | null
          profile_id?: string | null
          sent_at?: string | null
        }
        Update: {
          campaign_id?: string
          click_count?: number | null
          click_last?: string | null
          email?: string
          id?: string
          list_id?: string | null
          open_count?: number | null
          open_last?: string | null
          profile_id?: string | null
          sent_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "newsletter_recipients_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "newsletter_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "newsletter_recipients_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "newsletter_email_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "newsletter_recipients_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          country_of_origin: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          membership_tier: string | null
          role: string | null
          skills: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          country_of_origin?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          membership_tier?: string | null
          role?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          country_of_origin?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          membership_tier?: string | null
          role?: string | null
          skills?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      virtual_assistants: {
        Row: {
          admin_notes: string | null
          availability_hours: number | null
          avatar_url: string | null
          certifications: string[] | null
          client_rating: number | null
          completed_projects: number | null
          cover_image_url: string | null
          created_at: string
          currency: string | null
          cv_url: string | null
          experience_years: number | null
          featured: boolean | null
          hourly_rate: number | null
          id: string
          languages: string[] | null
          linkedin_profile: string | null
          phone_number: string | null
          portfolio_url: string | null
          preferred_contact_method: string | null
          profile_id: string
          response_time_hours: number | null
          specializations: string[] | null
          success_rate: number | null
          tags: string[] | null
          telegram_handle: string | null
          timezone: string | null
          tools_proficiency: string[] | null
          updated_at: string
          va_status: string | null
          verification_date: string | null
          verified_by: string | null
          whatsapp_number: string | null
        }
        Insert: {
          admin_notes?: string | null
          availability_hours?: number | null
          avatar_url?: string | null
          certifications?: string[] | null
          client_rating?: number | null
          completed_projects?: number | null
          cover_image_url?: string | null
          created_at?: string
          currency?: string | null
          cv_url?: string | null
          experience_years?: number | null
          featured?: boolean | null
          hourly_rate?: number | null
          id?: string
          languages?: string[] | null
          linkedin_profile?: string | null
          phone_number?: string | null
          portfolio_url?: string | null
          preferred_contact_method?: string | null
          profile_id: string
          response_time_hours?: number | null
          specializations?: string[] | null
          success_rate?: number | null
          tags?: string[] | null
          telegram_handle?: string | null
          timezone?: string | null
          tools_proficiency?: string[] | null
          updated_at?: string
          va_status?: string | null
          verification_date?: string | null
          verified_by?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          admin_notes?: string | null
          availability_hours?: number | null
          avatar_url?: string | null
          certifications?: string[] | null
          client_rating?: number | null
          completed_projects?: number | null
          cover_image_url?: string | null
          created_at?: string
          currency?: string | null
          cv_url?: string | null
          experience_years?: number | null
          featured?: boolean | null
          hourly_rate?: number | null
          id?: string
          languages?: string[] | null
          linkedin_profile?: string | null
          phone_number?: string | null
          portfolio_url?: string | null
          preferred_contact_method?: string | null
          profile_id?: string
          response_time_hours?: number | null
          specializations?: string[] | null
          success_rate?: number | null
          tags?: string[] | null
          telegram_handle?: string | null
          timezone?: string | null
          tools_proficiency?: string[] | null
          updated_at?: string
          va_status?: string | null
          verification_date?: string | null
          verified_by?: string | null
          whatsapp_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "virtual_assistants_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "virtual_assistants_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      handle_course_registration: {
        Args: {
          p_email: string
          p_experience?: string
          p_full_name: string
          p_motivation?: string
          p_phone: string
        }
        Returns: Json
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const

