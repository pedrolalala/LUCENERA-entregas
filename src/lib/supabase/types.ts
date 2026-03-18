// AVOID UPDATING THIS FILE DIRECTLY. It is automatically generated.
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      entregas: {
        Row: {
          codigo_obra: string | null
          created_at: string
          endereco: string | null
          foto_url: string | null
          id: number
          mensagem_trigger_id: string | null
          nome_entregador: string | null
          observacao: string | null
          status: string
          telefone: string
          updated_at: string
        }
        Insert: {
          codigo_obra?: string | null
          created_at?: string
          endereco?: string | null
          foto_url?: string | null
          id?: number
          mensagem_trigger_id?: string | null
          nome_entregador?: string | null
          observacao?: string | null
          status?: string
          telefone: string
          updated_at?: string
        }
        Update: {
          codigo_obra?: string | null
          created_at?: string
          endereco?: string | null
          foto_url?: string | null
          id?: number
          mensagem_trigger_id?: string | null
          nome_entregador?: string | null
          observacao?: string | null
          status?: string
          telefone?: string
          updated_at?: string
        }
        Relationships: []
      }
      entregas_programadas: {
        Row: {
          arquivos: Json | null
          cliente: string
          created_at: string
          criado_por: string | null
          data_prevista: string | null
          endereco: string | null
          id: number
          material_desc: string | null
          nivel_entrega: number | null
          observacoes: string | null
          origem_teams_msg: string | null
          periodo: string | null
          responsavel_nome: string | null
          responsavel_tel: string | null
          status: string
          tipo: string | null
          total_itens: number | null
          updated_at: string
        }
        Insert: {
          arquivos?: Json | null
          cliente: string
          created_at?: string
          criado_por?: string | null
          data_prevista?: string | null
          endereco?: string | null
          id?: number
          material_desc?: string | null
          nivel_entrega?: number | null
          observacoes?: string | null
          origem_teams_msg?: string | null
          periodo?: string | null
          responsavel_nome?: string | null
          responsavel_tel?: string | null
          status?: string
          tipo?: string | null
          total_itens?: number | null
          updated_at?: string
        }
        Update: {
          arquivos?: Json | null
          cliente?: string
          created_at?: string
          criado_por?: string | null
          data_prevista?: string | null
          endereco?: string | null
          id?: number
          material_desc?: string | null
          nivel_entrega?: number | null
          observacoes?: string | null
          origem_teams_msg?: string | null
          periodo?: string | null
          responsavel_nome?: string | null
          responsavel_tel?: string | null
          status?: string
          tipo?: string | null
          total_itens?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      healthcheck: {
        Row: {
          checked_at: string
          id: number
          note: string | null
        }
        Insert: {
          checked_at?: string
          id?: number
          note?: string | null
        }
        Update: {
          checked_at?: string
          id?: number
          note?: string | null
        }
        Relationships: []
      }
      mensagens: {
        Row: {
          ai_draft: string | null
          analysis: Json | null
          approval_mode: boolean
          approved: boolean | null
          approved_by: string | null
          assistant_id: string | null
          connected_phone: string | null
          created_at: string
          data: string | null
          direction: string | null
          error: string | null
          final_out: string | null
          from_me: boolean | null
          fromme: boolean | null
          group_id: string | null
          group_name: string | null
          id: string
          id_num: number
          instance_id: string | null
          is_group: boolean | null
          manual_reply: string | null
          mensagem: Json | null
          message_id: string | null
          nome: Json | null
          origem: string | null
          status: string
          telefone: string | null
          thread_id: string | null
          updated_at: string
          used_ai: boolean
        }
        Insert: {
          ai_draft?: string | null
          analysis?: Json | null
          approval_mode?: boolean
          approved?: boolean | null
          approved_by?: string | null
          assistant_id?: string | null
          connected_phone?: string | null
          created_at?: string
          data?: string | null
          direction?: string | null
          error?: string | null
          final_out?: string | null
          from_me?: boolean | null
          fromme?: boolean | null
          group_id?: string | null
          group_name?: string | null
          id?: string
          id_num?: number
          instance_id?: string | null
          is_group?: boolean | null
          manual_reply?: string | null
          mensagem?: Json | null
          message_id?: string | null
          nome?: Json | null
          origem?: string | null
          status?: string
          telefone?: string | null
          thread_id?: string | null
          updated_at?: string
          used_ai?: boolean
        }
        Update: {
          ai_draft?: string | null
          analysis?: Json | null
          approval_mode?: boolean
          approved?: boolean | null
          approved_by?: string | null
          assistant_id?: string | null
          connected_phone?: string | null
          created_at?: string
          data?: string | null
          direction?: string | null
          error?: string | null
          final_out?: string | null
          from_me?: boolean | null
          fromme?: boolean | null
          group_id?: string | null
          group_name?: string | null
          id?: string
          id_num?: number
          instance_id?: string | null
          is_group?: boolean | null
          manual_reply?: string | null
          mensagem?: Json | null
          message_id?: string | null
          nome?: Json | null
          origem?: string | null
          status?: string
          telefone?: string | null
          thread_id?: string | null
          updated_at?: string
          used_ai?: boolean
        }
        Relationships: []
      }
      threads: {
        Row: {
          chave: string
          created_at: string
          id: number
          thread_id: string
          updated_at: string
        }
        Insert: {
          chave: string
          created_at?: string
          id?: number
          thread_id: string
          updated_at?: string
        }
        Update: {
          chave?: string
          created_at?: string
          id?: number
          thread_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      whatsapp_messages: {
        Row: {
          ai_draft: string | null
          approval_mode: boolean
          approved: boolean | null
          created_at: string
          data: string | null
          error: string | null
          final_out: string | null
          group_id: string | null
          group_name: string | null
          id: string
          mensagem: Json | null
          nome: Json | null
          origem: string | null
          status: string
          telefone: string | null
          updated_at: string
          used_ai: boolean
        }
        Insert: {
          ai_draft?: string | null
          approval_mode?: boolean
          approved?: boolean | null
          created_at?: string
          data?: string | null
          error?: string | null
          final_out?: string | null
          group_id?: string | null
          group_name?: string | null
          id?: string
          mensagem?: Json | null
          nome?: Json | null
          origem?: string | null
          status?: string
          telefone?: string | null
          updated_at?: string
          used_ai?: boolean
        }
        Update: {
          ai_draft?: string | null
          approval_mode?: boolean
          approved?: boolean | null
          created_at?: string
          data?: string | null
          error?: string | null
          final_out?: string | null
          group_id?: string | null
          group_name?: string | null
          id?: string
          mensagem?: Json | null
          nome?: Json | null
          origem?: string | null
          status?: string
          telefone?: string | null
          updated_at?: string
          used_ai?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
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
  public: {
    Enums: {},
  },
} as const


// ====== DATABASE EXTENDED CONTEXT (auto-generated) ======
// This section contains actual PostgreSQL column types, constraints, RLS policies,
// functions, triggers, indexes and materialized views not present in the type definitions above.
// IMPORTANT: The TypeScript types above map UUID, TEXT, VARCHAR all to "string".
// Use the COLUMN TYPES section below to know the real PostgreSQL type for each column.
// Always use the correct PostgreSQL type when writing SQL migrations.

// --- COLUMN TYPES (actual PostgreSQL types) ---
// Use this to know the real database type when writing migrations.
// "string" in TypeScript types above may be uuid, text, varchar, timestamptz, etc.
// Table: entregas
//   id: bigint (not null)
//   telefone: text (not null)
//   nome_entregador: text (nullable)
//   status: text (not null, default: 'coletando_endereco'::text)
//   mensagem_trigger_id: text (nullable)
//   endereco: text (nullable)
//   codigo_obra: text (nullable)
//   foto_url: text (nullable)
//   observacao: text (nullable)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   updated_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
// Table: entregas_programadas
//   id: bigint (not null)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   updated_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   cliente: text (not null)
//   tipo: text (nullable)
//   data_prevista: date (nullable)
//   periodo: text (nullable)
//   endereco: text (nullable)
//   responsavel_nome: text (nullable)
//   responsavel_tel: text (nullable)
//   material_desc: text (nullable)
//   observacoes: text (nullable)
//   arquivos: jsonb (nullable)
//   total_itens: integer (nullable)
//   nivel_entrega: integer (nullable)
//   status: text (not null, default: 'registrada'::text)
//   criado_por: text (nullable)
//   origem_teams_msg: text (nullable)
// Table: healthcheck
//   id: bigint (not null)
//   checked_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   note: text (nullable)
// Table: mensagens
//   id: uuid (not null, default: gen_random_uuid())
//   id_num: bigint (not null)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   updated_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   data: timestamp with time zone (nullable, default: timezone('utc'::text, now()))
//   telefone: text (nullable)
//   group_id: text (nullable)
//   group_name: text (nullable)
//   mensagem: jsonb (nullable, default: '{}'::jsonb)
//   nome: jsonb (nullable, default: '{}'::jsonb)
//   direction: text (nullable, default: 'in'::text)
//   origem: text (nullable, default: 'whatsapp'::text)
//   status: text (not null, default: 'received'::text)
//   ai_draft: text (nullable)
//   final_out: text (nullable)
//   manual_reply: text (nullable)
//   approved: boolean (nullable)
//   approved_by: text (nullable)
//   approval_mode: boolean (not null, default: false)
//   used_ai: boolean (not null, default: false)
//   fromme: boolean (nullable)
//   from_me: boolean (nullable)
//   is_group: boolean (nullable)
//   thread_id: text (nullable)
//   assistant_id: text (nullable)
//   analysis: jsonb (nullable)
//   error: text (nullable)
//   message_id: text (nullable)
//   instance_id: text (nullable)
//   connected_phone: text (nullable)
// Table: threads
//   id: bigint (not null)
//   chave: text (not null)
//   thread_id: text (not null)
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   updated_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
// Table: whatsapp_messages
//   id: uuid (not null, default: gen_random_uuid())
//   created_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   updated_at: timestamp with time zone (not null, default: timezone('utc'::text, now()))
//   telefone: text (nullable)
//   mensagem: jsonb (nullable, default: '{}'::jsonb)
//   nome: jsonb (nullable, default: '{}'::jsonb)
//   data: timestamp with time zone (nullable, default: timezone('utc'::text, now()))
//   group_id: text (nullable)
//   group_name: text (nullable)
//   ai_draft: text (nullable)
//   final_out: text (nullable)
//   origem: text (nullable, default: 'whatsapp'::text)
//   status: text (not null, default: 'received'::text)
//   approval_mode: boolean (not null, default: false)
//   used_ai: boolean (not null, default: false)
//   approved: boolean (nullable)
//   error: text (nullable)

// --- CONSTRAINTS ---
// Table: entregas
//   PRIMARY KEY entregas_pkey: PRIMARY KEY (id)
// Table: entregas_programadas
//   UNIQUE entregas_programadas_cliente_data_endereco_uk: UNIQUE (cliente, data_prevista, endereco)
//   PRIMARY KEY entregas_programadas_pkey: PRIMARY KEY (id)
// Table: healthcheck
//   PRIMARY KEY healthcheck_pkey: PRIMARY KEY (id)
// Table: mensagens
//   UNIQUE mensagens_id_num_unique: UNIQUE (id_num)
//   PRIMARY KEY mensagens_pkey: PRIMARY KEY (id)
// Table: threads
//   PRIMARY KEY threads_pkey: PRIMARY KEY (id)
// Table: whatsapp_messages
//   PRIMARY KEY whatsapp_messages_pkey: PRIMARY KEY (id)

// --- DATABASE FUNCTIONS ---
// FUNCTION set_updated_at()
//   CREATE OR REPLACE FUNCTION public.set_updated_at()
//    RETURNS trigger
//    LANGUAGE plpgsql
//   AS $function$
//   BEGIN
//     NEW.updated_at = timezone('utc', now());
//     RETURN NEW;
//   END;
//   $function$
//   

// --- TRIGGERS ---
// Table: entregas
//   trg_entregas_updated_at: CREATE TRIGGER trg_entregas_updated_at BEFORE UPDATE ON public.entregas FOR EACH ROW EXECUTE FUNCTION set_updated_at()
// Table: entregas_programadas
//   trg_entregas_programadas_updated_at: CREATE TRIGGER trg_entregas_programadas_updated_at BEFORE UPDATE ON public.entregas_programadas FOR EACH ROW EXECUTE FUNCTION set_updated_at()
// Table: mensagens
//   trg_mensagens_updated_at: CREATE TRIGGER trg_mensagens_updated_at BEFORE UPDATE ON public.mensagens FOR EACH ROW EXECUTE FUNCTION set_updated_at()
// Table: threads
//   trg_threads_updated_at: CREATE TRIGGER trg_threads_updated_at BEFORE UPDATE ON public.threads FOR EACH ROW EXECUTE FUNCTION set_updated_at()
// Table: whatsapp_messages
//   trg_whatsapp_messages_updated_at: CREATE TRIGGER trg_whatsapp_messages_updated_at BEFORE UPDATE ON public.whatsapp_messages FOR EACH ROW EXECUTE FUNCTION set_updated_at()

// --- INDEXES ---
// Table: entregas
//   CREATE INDEX idx_entregas_status ON public.entregas USING btree (status)
//   CREATE INDEX idx_entregas_telefone ON public.entregas USING btree (telefone)
// Table: entregas_programadas
//   CREATE UNIQUE INDEX entregas_programadas_cliente_data_endereco_uk ON public.entregas_programadas USING btree (cliente, data_prevista, endereco)
//   CREATE INDEX idx_entregas_programadas_data_prevista ON public.entregas_programadas USING btree (data_prevista)
//   CREATE INDEX idx_entregas_programadas_nivel ON public.entregas_programadas USING btree (nivel_entrega)
//   CREATE INDEX idx_entregas_programadas_status ON public.entregas_programadas USING btree (status)
// Table: mensagens
//   CREATE INDEX idx_mensagens_data ON public.mensagens USING btree (data DESC)
//   CREATE INDEX idx_mensagens_group_id ON public.mensagens USING btree (group_id)
//   CREATE INDEX idx_mensagens_message_id ON public.mensagens USING btree (message_id)
//   CREATE INDEX idx_mensagens_status ON public.mensagens USING btree (status)
//   CREATE INDEX idx_mensagens_telefone ON public.mensagens USING btree (telefone)
//   CREATE UNIQUE INDEX mensagens_id_num_unique ON public.mensagens USING btree (id_num)
// Table: threads
//   CREATE UNIQUE INDEX idx_threads_chave ON public.threads USING btree (chave)
//   CREATE UNIQUE INDEX idx_threads_thread_id ON public.threads USING btree (thread_id)
// Table: whatsapp_messages
//   CREATE INDEX idx_whatsapp_messages_group_id ON public.whatsapp_messages USING btree (group_id)
//   CREATE INDEX idx_whatsapp_messages_status ON public.whatsapp_messages USING btree (status)
//   CREATE INDEX idx_whatsapp_messages_telefone ON public.whatsapp_messages USING btree (telefone)

