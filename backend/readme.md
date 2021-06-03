# ESS Backend

Create super user/admin using following command

```python
docker exec -it ess_backend_1 python manage.py createsuperuser
```

Create a new app

```python
python3 manage.py startapp {app_name}
```

Create migrations for new models or any change in model

```python
python3 manage.py makemigratons
```

Apply migrations to database

```python
python3 manage.py migrate
```
