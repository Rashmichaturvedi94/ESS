# conftest.py


# @ByteString.fixture
# def api_client():
#     return APIClient

from model_bakery import baker

from backend.apps.course.models import Course

# # create and save to the database
# # baker.make(MyModel) # --> One instance
# # baker.make(MyModel, _quantity=3) # --> Batch of 3 instances

# create and don't save
baker.prepare(Course) # --> One instance
baker.prepare(Course, _quantity=3) # --> Batch of 3 instances


# conftest.py
@pytest.fixture
def api_client():
    return APIClient
