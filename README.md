# metallic-button-with-react-icons

A customizable React button component with a metallic look and a configurable shine effect.

## Installation

To run the project:

```bash
npm install
npm run storybook
```

## Props

| Prop              | Type                        | Default                    | Description                                                             |
| ----------------- | --------------------------- | -------------------------- | ----------------------------------------------------------------------- |
| `width`           | `number`                    | `150`                      | The width of the button in pixels.                                      |
| `height`          | `number`                    | `40`                       | The height of the button in pixels.                                     |
| `$shouldShine`    | `boolean`                   | `false`                    | If `true`, the button will have a shine effect on hover.                |
| `$shineColor`     | `string`                    | `rgba(255, 255, 255, 0.8)` | The color of the shine effect.                                          |
| `$shineDuration`  | `number`                    | `1.4`                      | The duration of the shine animation in seconds. The shorter the faster. |
| `$shineDirection` | `'horizontal' │ 'vertical'` | `'horizontal'`             | The direction of the shine effect.                                      |
| `icon`            | `IconType`                  | -                          | An icon to display on the button (from `react-icons`).                  |
| `$iconSize`       | `number`                    | `24`                       | The size of the icon in pixels.                                         |
| `$iconColor`      | `string`                    | `inherit`                  | The color of the icon.                                                  |
| `onClick`         | `() => void`                | -                          | A function to be called when the button is clicked.                     |
