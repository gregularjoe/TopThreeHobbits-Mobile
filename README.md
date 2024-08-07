# Top Three Hobbits App

## Overview

The **Top Three Hobbits App** is a React Native application that allows users to view and update their top three favorite hobbits. The app starts with a default top three list, which is the favorite hobbits of the app’s creator. Users can navigate through the app to view detailed information about each hobbit and update the list with their own preferences.

## Features

- **View Top Three Hobbits**: On the main page, users can click buttons to display detailed information about the top three hobbits.
- **Update Hobbit Information**: An update page allows users to input their own hobbit details and rank them accordingly.
- **Persistent Storage**: The app uses SQLite for persistent storage of hobbit information.
- **Modern UI Components**: Utilizes components from `react-native-paper` and a picker from `@react-native-picker/picker`.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For development and running the app.
- **SQLite**: For database management.
- **react-native-paper**: For UI components.
- **@react-native-picker/picker**: For the picker component.

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/top-three-hobbits.git
    cd top-three-hobbits
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the Expo server**:

    ```sh
    npx expo start
    ```

4. **Run the app on an Android emulator**:

    ```sh
    npx expo run:android
    ```


## Usage

1. **Main Page**: View the top three hobbits by clicking the buttons. Each button displays detailed information about the selected hobbit.
2. **Update Page**: Navigate to the update page to input your own hobbit details and rank them. The updated information will be saved in the SQLite database.

## Components

- **NavBar**: Navigation bar for the app.
- **Hobbit**: Component to display hobbit information.
- **Button**: Custom button component.
- **HobbitContext**: Context for managing hobbit data.
- **SQLiteProvider**: Provider for SQLite database.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.