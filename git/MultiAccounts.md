## Handle multiple git accounts

- add multiple public and private keys
- have different host for different accounts

```al

Host mine.github.com
HostName github.com
User git
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_mine

Host fp.github.com
HostName github.com
User git
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_pf

```

- use thses host instead of `github.com` to clone stuff


### Use particular accoutn for a commit

- Edit the `.git/congif` file of the repo and add needed `user.name` and `user.email`




