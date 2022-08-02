import { Component, Prop, h} from '@stencil/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() theme: 'green' | 'red' = 'green';

  render() {
    return <div class={this.theme}>Hello, World!</div>;
  }
}
