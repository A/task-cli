tasks-cli
=========

Simple CLI task manager based on [taskninja/task-model][1]. 

![screenshot](https://cloud.githubusercontent.com/assets/1410106/4970081/312c2714-6878-11e4-95a3-c6f3ab5e0eca.png)

## Features

- Show next actionable tasks with `tasks next` command 
- Minimal and expressive options: `name`, `description`, `tags`, `estimate`, `start` and `due`.
- Easy syntax: `tasks add name: new task`
- Full Metal JavaScript: MongoDB and NodeJS with ES6 Generators under the hood.
- All the charm of CLI, if you know what I mean ᕕ( ᐛ )ᕗ

## Intarface

#### Global Flags

- `-v, --verbosed`  
  Show you verbosed logs for some operations.
- `-c, --count`
  Show count of the tasks instead task descriptions.

#### tasks add

```sh
❯ tasks add name: Go to sleep due: now
```

You can define `name:`, `description:`, `tags:`, `estimate:`, `start:` and `due:`.
Have no doubts for [date formating][2]: just be the human, not the robot! ╚(ಠ_ಠ)=┐

#### tasks update <id>

```sh
❯ tasks update 512 name: Go to sleep due: next 30 min
```

You can define `name:`, `description:`, `tags:`, `estimate:`, `start:` and `due:`.
Have no doubts for [date formating][2]: just be the human, not the robot! ╚(ಠ_ಠ)=┐


#### tasks get [id or tag]

Show tasks by id or tag or just show all tasks.

```sh
❯ tasks get # get all the tasks
❯ tasks get 512 # get task #512
❯ tasks get inbox # get all tasks with inbox tag
```

#### tasks next

Show you next actionable tasks. Without the mess.

```sh
❯ tasks next
```

#### tasks done <id> [id...]

Mark tasks as finished.

```sh
❯ tasks done 512 513
```

#### tasks remove <id> [id...]

Remove tasks

```sh
❯ tasks remove 512 513
```

#### tasks find <text>

Find tasks by text

```sh
❯ tasks find github
```

## Licence

MIT



[1]: https://github.com/taskninja/task-model
[2]: http://matthewmueller.github.io/date/
