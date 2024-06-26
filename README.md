# React Native Truckup Shift Selector Challenge

This is a React Native Calendar application with features such as a time picker, highlighted today's date, historical days in muted color, timezone display, and more.

## Features

- Highlight today's date in red
- Display historical days with muted text color
- Show device timezone
- Display current month, future months scrollable vertically
- Snap entire month into view
- Time picker with 15-minute intervals in AM/PM format
- Haptic feedback on time selection
- Bottom sheet for setting availability

## Screenshots

![Calendar Screen](./assets/demo/calendar.png)
![Date Selector Bottom Sheet](./assets/demo/dateSelector.png)
![Wrong Selection](./assets/demo/wrongSelection.png)
![Selected Date indicator](./assets/demo/selectedDate.png)

## Screen Recording

Watch the screen recording [here](./assets/demo/demoVideo.mov).

## Installation

To run this project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/FatjonRrapaj/TruckupChallenge.git
cd your-repo
```

2. Install dependencies

```
yarn install
```

3. Install the necessary pods (iOS only):

```
npx pod-install

```

4. Run the application:

```
yarn ios
```

for Android

```
yearn android
```

### Notes

1. The Swipe down to close Bottom Swipe Modal works only if swiped on the Bottom Swipe Header.
   Sorry for that, I am really pressed for time, did not use RN bottom sheet or anything, just the Plain React Native Modal

2. The libraries used both for handling the Modal swipe and for the horizontal time selector are very unpopular, they were just easy to use. In a production App I would not have picked those but much more consolidated ones. This was only to finish the challenge on time..
