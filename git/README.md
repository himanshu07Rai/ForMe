# GIT

## PAT

- create PAT
- git config --global --edit (delete everything except name,email and username , add if not present)
- git config -l
- git config --global credential.helper cache
- git push / pull
- enter credentials ( username and PAT)
- done

---

## Alias

### shell aliases

- vi ~/.zshrc
- create alias. eg
- alias gst='git status'

### git alias

we can edit global config file , which is stored at ~/.gitconfig

vi ~/.gitconfig

```git
[alias]
        add-commit = git add . && git commit
```

OR

git config --global --edit

---

## Caching your GitHub credentials in Git

- install github cli
- gh auth login

---
