# React-Native-Phone-Code-Picker-Component

This is a customizable React Native component that provides a phone area code picker for your mobile app. The component allows users to select their country and get the associated area code.

<img width="372" alt="Screenshot 2023-03-13 at 13 34 48" src="https://user-images.githubusercontent.com/63505688/224677692-898adb5f-1f0d-4c8d-a5e8-2502f8a6526c.png">

![Simulator Screen Shot - iPhone 14 Pro Max - 2023-03-13 at 13 32 13](https://user-images.githubusercontent.com/63505688/224677612-2b698727-f657-491a-8f0b-7777fadef444.png)

## Features

- Provides a modal which contains a list of countries to select from
- Displays the selected country's flag and area code
- Supports filtering of countries by name or code
- Easily customizable styles and themes
- Formatting of the selected country's phone number

<img width="396" alt="Screenshot 2023-03-13 at 13 34 36" src="https://user-images.githubusercontent.com/63505688/224677658-194fd385-7df8-4590-9a74-2bf6caf59840.png">

## Usage

Here is a simple example of how to use the component:

```javascript
function MyComponent() {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <PhoneAreaCodePicker
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
    />
  );
}
```

The setPhoneNumber prop is a callback that will be called when the user selects a country. This event is fired when the user selects a country from the modal. The selectedCountry prop should be a country object with the following structure:

```javascript
  {
    name: "Turkey",
    flag: "🇹🇷",
    code: "TR",
    dial_code: "+90"
  },
```

You can also customize the styles and theme of the component by passing in additional props:

```javascript
<PhoneAreaCodePicker
...
style={{
    container: { marginTop: 16 },
    input: { fontSize: 18 },
    ...
  }}
/>
```

this repository is made for the project [VYBE](https://github.com/YigitEkin/Vybe).
Hence the default styling is made for the project. You can change the styling as you wish.
