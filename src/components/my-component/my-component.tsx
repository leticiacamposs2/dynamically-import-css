import { Component, Prop, h, FunctionalComponent, Host, State, Watch} from '@stencil/core';

const ThemeStyle: FunctionalComponent<{style: string}> =
  ({style}) => {
    return (
      <style>{`
        :host ${style};
      `}
      </style>
    )
  }

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() theme: 'green' | 'red' = 'green';

  @State()
  private style: string;

  async componentWillLoad() {
    await this.loadTheme();
  }

  @Watch('theme')
  private async loadTheme() {
    const {theme} = await this.importTheme();
    this.style = theme;
  }

  private async importTheme(): Promise<{theme}> {
    if (this.theme === 'red') {
      return import('./red');
    } else {
      return import('./green');
    }
  }

  render() {
    return <Host>
      <ThemeStyle style={this.style}></ThemeStyle>
      <div class={this.theme}>Hello, World!</div>
    </Host>;
  }
}
