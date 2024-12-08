# React Native AsyncStorage: Accessing Data Before It's Written

This repository demonstrates a common error when using AsyncStorage in React Native: accessing data before the asynchronous storage operation completes.  This leads to unexpected undefined values.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem
AsyncStorage operations are asynchronous. Attempting to read data immediately after writing it without handling the promise will likely result in reading an undefined value because the write operation hasn't finished yet.