from rest_framework.routers import SimpleRouter

from . import views


router = SimpleRouter()
router.register("messages", views.MessageViewSet, "messages")

urlpatterns = router.urls
