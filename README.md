# Step-by-Step Guide to Download and Process Instagram Followers and Following Data

## 1. Login to Your Instagram Account
- Open Instagram on your browser or app.
- Enter your credentials and log in to your account.

---

## 2. Navigate to Your Profile
- Click on your profile icon in the bottom-right corner (on the app) or top-right corner (on the browser).

---

## 3. Access the **Your Activity** Section
- Tap the **Menu** (three horizontal lines) on your profile page.
- Select **Your Activity** from the dropdown menu.

---

## 4. Download Your Information
- Inside the **Your Activity** section:
  - Select **"Download Your Information"** or **"Download or Transfer Your Information"**.

---

## 5. Choose **Followers and Following**
- In the **Some of Your Information** section, look for the **"Followers and Following"** category.
- Click **"Download to Device"** to proceed.

---

## 6. Configure Download Settings
- Instagram will ask you to configure the download settings:
  - **Date Range**: Select **All Time** to include all historical data.
  - **Format**: Choose **JSON** for the data format.

---

## 7. Request the Data
- Click the **Request Download** button.
- Instagram will process your request and send a confirmation email with a download link.

---

## 8. Wait for the Email
- Wait for Instagram to process your request. This may take some time depending on the size of your data.
- Check your email inbox (the email associated with your Instagram account) for the download link.

---

## 9. Download the Data
- Open the email from Instagram.
- Click on the provided download link and log in to your Instagram account to confirm.
- Save the `.zip` file to your device.

---

## 10. Extract the Data
- Extract the `.zip` file to a directory on your computer.
  - On Windows: Right-click the file and select **Extract All**.
  - On macOS: Double-click the file to extract.

---

## 11. Locate the Relevant JSON Files
- Navigate to the extracted folder.
- Open the `connections` subfolder.
- Identify and copy the following files:
  - `followers_1.json`
  - `following.json`

---

## 12. Add JSON Files to Your Project
- Place the copied files into your project directory under a folder named `followers_and_following/`.

---

## 13. Update the Code to Process Data

### Import JSON Data
Modify your code to import the JSON files:
```javascript
const following = require('../followers_and_following/following.json');
const followers = require('../followers_and_following/followers_1.json');

module.exports = { followers, following };
