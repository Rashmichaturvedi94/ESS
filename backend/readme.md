Create super user/admin using following command
```
docker exec -it {container_id} python manage.py createsuperuser
```
Create a new app 
```
python3 manage.py startapp {app_name}
```
Create migrations for new models or any change in model
```
python3 manage.py makemigratons
```
Apply migrations to database
```
python3 manage.py migrate
```
