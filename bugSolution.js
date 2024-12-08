The solution involves using `async/await` to ensure the write operation completes before attempting to read the data.  The `await` keyword pauses execution until the promise resolves.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
    const retrievedValue = await AsyncStorage.getItem(key);
    console.log('Retrieved value:', retrievedValue);
  } catch (error) {
    console.error('Error storing/retrieving data:', error);
  }
}

storeData('myKey', 'myValue');
```