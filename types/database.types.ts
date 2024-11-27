export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string;
          created_by: string;
          id: string;
          name: string;
          type: 'income' | 'expense';
        };
        Insert: {
          created_at?: string;
          created_by: string;
          id?: string;
          name: string;
          type: string;
        };
        Update: {
          created_at?: string;
          created_by?: string;
          id?: string;
          name?: string;
          type?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'categories_created_by_fkey';
            columns: ['created_by'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      goals: {
        Row: {
          created_at: string;
          current_amount: number;
          end_date: string;
          id: string;
          name: string;
          start_date: string;
          status: 'active' | 'completed' | 'missed';
          target_amount: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          current_amount?: number;
          end_date: string;
          id?: string;
          name: string;
          start_date: string;
          status?: string;
          target_amount: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          current_amount?: number;
          end_date?: string;
          id?: string;
          name?: string;
          start_date?: string;
          status?: string;
          target_amount?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'goals_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      'recurring expenses': {
        Row: {
          amount: number;
          category_id: string;
          created_at: string;
          end_date: string | null;
          frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
          id: string;
          start_date: string;
          user_id: string;
        };
        Insert: {
          amount: number;
          category_id: string;
          created_at?: string;
          end_date?: string | null;
          frequency: string;
          id?: string;
          start_date: string;
          user_id: string;
        };
        Update: {
          amount?: number;
          category_id?: string;
          created_at?: string;
          end_date?: string | null;
          frequency?: string;
          id?: string;
          start_date?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'recurring expenses_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'recurring expenses_id_fkey1';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          }
        ];
      };
      'statistics/aggregation': {
        Row: {
          created_at: string;
          end_date: string;
          id: string;
          period: 'week' | 'month' | 'year';
          start_date: string;
          total_expense: number;
          total_income: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          end_date: string;
          id?: string;
          period: string;
          start_date: string;
          total_expense?: number;
          total_income?: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          end_date?: string;
          id?: string;
          period?: string;
          start_date?: string;
          total_expense?: number;
          total_income?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'statistics/aggregation_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      transactions: {
        Row: {
          amount: number;
          category_id: string;
          created_at: string;
          id: string;
          note: string | null;
          transaction_date: string;
          type: 'income' | 'expense';
          user_id: string;
        };
        Insert: {
          amount: number;
          category_id: string;
          created_at?: string;
          id?: string;
          note?: string | null;
          transaction_date: string;
          type: string;
          user_id: string;
        };
        Update: {
          amount?: number;
          category_id?: string;
          created_at?: string;
          id?: string;
          note?: string | null;
          transaction_date?: string;
          type?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'transactions_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'transactions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      users: {
        Row: {
          avatar: string | null;
          created_at: string;
          email: string;
          first_name: string;
          id: string;
          last_name: string;
          has_membership: boolean;
        };
        Insert: {
          avatar?: string | null;
          created_at?: string;
          email: string;
          first_name: string;
          id?: string;
          last_name: string;
          has_membership?: boolean;
        };
        Update: {
          avatar?: string | null;
          created_at?: string;
          email?: string;
          first_name?: string;
          id?: string;
          last_name?: string;
          has_membership?: boolean;
        };
        Relationships: [];
      };
    };
    Views: {
      user_analytics: {
        Row: {
          last_signup_date: string | null;
          total_users: number | null;
          users_last_30_days: number | null;
        };
        Relationships: [];
      };
      user_monthly_expenses: {
        Row: {
          month: string | null;
          total_expenses: number | null;
          user_id: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'transactions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      user_weekly_expenses: {
        Row: {
          total_expenses: number | null;
          user_id: string | null;
          week: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'transactions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      user_yearly_expenses: {
        Row: {
          total_expenses: number | null;
          user_id: string | null;
          year: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'transactions_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      feedback: {
        Row: {
          id: number;
          user_id: string;
          message: string;
          rating: number | null;
          created_at: string;
        };

        Insert: {
          user_id: string;
          message: string;
          rating?: number | null; // Optional on insert
        };
        Update: {
          message?: string;
          rating?: number | null; // Optional on update
        };
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
  ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
  : never;
