

##Deta :
https://5u3m9w.deta.dev/api/get-user-info/battleooze


# First MicroTask
#### It is an API used to find the entire information about any user on CodeForces. It can also be used to fetch the entire description of the rating changes of an user during a particular contest.
## API Reference

#### Get item

```http
  5u3m9w.deta.dev/api/get-user-info/userid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. The user who's details we want to fetch |



Takes the user id and returns a list of User objects for requested handle.

#### Get item

```http
  5u3m9w.deta.dev/api/get-user-contests/userid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. The user who's details we want to fetch |



Takes the user id and returns a list of RatingChange objects for requested user.

### Installation

```bash
  git clone https://github.com/BattleOoze25/CodeForcesAPI
```
### Navigation
```bash
  cd CodeForcesAPI
```

### Installation

```bash
  npm i
```


### Run Server

```bash
  npm start
```
## Author

- [@BattleOoze25](https://www.github.com/BattleOoze25)

