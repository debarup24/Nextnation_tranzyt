# NextNation Assignment

**Technology used :** React, Javascript, TailwindCSS

## Delivered :

- **horizontally scrollable section :** Services We Offer , Meet the People We Are Working With, Why Customers Love Working With Us
- **Responsiveness :** Application is fully responsive across different screen sizes (desktop, tablet and
  mobile).

## Reusable Code :

- Showcased one implementation of reusable code componet by creating ActionBTN.jsx file

```
 src/ui/buttons/ActionBTN.jsx
```

- Brands have their own color-identity for example: Swiggy - its orange, Zom,ato - its red, Indigo - its blue. Here i have created a Action Button component with variants, sizes and other props to maintain the design-specifications across the application

Use of ActionBTN :

```
import ActionBTN from "./ui/buttons/ActionBTN.jsx"

<ActionBTN variant={brand} size{md} OnClick={HandleClick} icon={}>
 Let's get started!
</ActionBTN>
```
