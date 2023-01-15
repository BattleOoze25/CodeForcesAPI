# CfApi

Deta :
https://5u3m9w.deta.dev/api/get-user-info/battleooze

# CodeForces API

This project is used to find the entire information about any user just by calling APIs.
It is also used to fetch the entire description of the rating changes of an user during a particular contest.


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

## Authors

- [@BattleOoze25](https://www.github.com/BattleOoze25)

