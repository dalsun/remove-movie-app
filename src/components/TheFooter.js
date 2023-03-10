import { Component } from "../core/dalsun";
import aboutStore from "../store/about";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    const { github } = aboutStore.state
    this.el.innerHTML = /* html */ `
      <div>
        <a href='#'>
          GitHub Repository
        </a>
      </div>
      <div>
        <a href='${github}'>
          ${new Date().getFullYear()}
          Dalsun
        </a>
      </div>
    `
  }
}