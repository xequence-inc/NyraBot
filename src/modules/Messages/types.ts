export interface EmbedField {
  name: string;
  value: string;
  inline: boolean;
}

export interface EmbedData {
  title: string;
  description: string;
  color: string;
  footer: string;
  thumbnail: string;
  image: string;
  fields: EmbedField[];
}

export type ButtonStyle = 'Primary' | 'Secondary' | 'Success' | 'Danger' | 'Link';

export interface ComponentButton {
  type: 'Button';
  style: ButtonStyle;
  label: string;
  emoji?: string;
  customId?: string;
  url?: string;
  disabled?: boolean;
}

export interface ComponentSelectOption {
  label: string;
  value: string;
  description?: string;
  emoji?: string;
  default?: boolean;
}

export interface ComponentSelectMenu {
  type: 'SelectMenu';
  customId: string;
  options: ComponentSelectOption[];
  placeholder?: string;
  minValues?: number;
  maxValues?: number;
  disabled?: boolean;
}

export type MessageComponent = ComponentButton | ComponentSelectMenu;

export interface ActionRow {
  type: 'ActionRow';
  components: MessageComponent[];
}

export interface MessageData {
    content: string;
    embeds: EmbedData[];
    components: ActionRow[];
}
