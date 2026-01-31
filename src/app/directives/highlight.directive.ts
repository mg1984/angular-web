import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  private readonly defaultHighlightColor = '#fff3bf';
  private _highlightColor = this.defaultHighlightColor;

  @Input('appHighlight')
  set highlightColor(value: string | null | undefined) {
    this._highlightColor = (value ?? '').trim() || this.defaultHighlightColor;
  }
  get highlightColor(): string {
    return this._highlightColor;
  }

  @Input() highlightTextColor = '#1f2937';

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') color = 'inherit';
  @HostBinding('style.transition') transition = 'background-color 0.2s ease, color 0.2s ease';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.backgroundColor = this.highlightColor;
    this.color = this.highlightTextColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.backgroundColor = 'transparent';
    this.color = 'inherit';
  }
}
