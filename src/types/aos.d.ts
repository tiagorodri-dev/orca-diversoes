declare module "aos" {
  export interface AosOptions {
    duration?: number;
    easing?: string;
    delay?: number;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    offset?: number;
  }

  export interface Aos {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const aos: Aos;
  export default aos;
}
