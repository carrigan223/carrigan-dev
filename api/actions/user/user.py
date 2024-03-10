from ...models.user import User

def create_user(user_data):
    user = User(**user_data)
    user.save()

def get_user(user_id):
    user = User.objects.get(id=user_id)
    return user

def update_user(user_id, user_data):
    user = User.objects.get(id=user_id)
    for key, value in user_data.items():
        setattr(user, key, value)
    user.save()

def delete_user(user_id):
    user = User.objects.get(id=user_id)
    user.delete()