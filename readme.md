# key-forge

## Overview

This open-source encryption tool provides a secure and efficient way to protect your sensitive text data using **AES-256-GCM encryption**. AES-256-GCM is a modern encryption standard widely trusted for its security and performance, making it suitable for various applications where data confidentiality is crucial.

## Key Features

- **Strong Encryption:** Utilizes AES-256-GCM to ensure high levels of security for your data.
- **Secure Key Generation:** Generates a strong **32-byte encryption key** from your password using the **PBKDF2** (Password-Based Key Derivation Function) with the **SHA-512** hashing algorithm. This method adds complexity to the key generation process through multiple iterations.
- **Randomized Parameters:** Each encryption session uses:
  - A **64-byte salt** to guarantee that the same password results in a unique encryption key.
  - A **16-byte initialization vector (IV)** to ensure that even identical plaintexts produce different ciphertexts.
- **Integrity Verification:** An **authentication tag** is generated during the encryption process. This tag verifies the integrity and authenticity of the data, allowing for the detection of any tampering or unauthorized modifications.

## How It Works

1. **Key Derivation:**
   - When you provide a password, the tool generates a unique encryption key using PBKDF2 with **SHA-512**.
   - A random salt (64 bytes) is added to the password to enhance security, ensuring that each derived key is unique even if the same password is used by different users or in different sessions.
   - The key generation process involves a random number of iterations (between **10,000 and 99,999**) to further strengthen the derived key against brute-force attacks.

2. **Data Encryption:**
   - The derived key is then used to encrypt your plaintext data using the AES-256-GCM algorithm.
   - A random initialization vector (IV) (16 bytes) is generated for each encryption. This ensures that even if the same plaintext is encrypted multiple times with the same key, the output will always differ.

3. **Output:**
   - The final output includes the encrypted data, the salt, the IV, and the authentication tag. This structured output allows for easy decryption and verification of the data's integrity.

## Privacy and Security

- **Client-Side Encryption:** All encryption operations occur directly in your browser, ensuring that your sensitive data is never sent to or stored on any external servers.
- **Session-Based Data Handling:** No data is saved in your browser storage. All information is kept in memory for the duration of your session, guaranteeing complete privacy and control over your data.

For any questions or contributions, please feel free to reach out or submit a pull request!

## Contributing

### Install dependencies

```sh
pnpm install
```

### Start development server

```sh
pnpm dev
```
