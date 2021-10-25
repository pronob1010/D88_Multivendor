from django.contrib import admin
from django.urls import path, include

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),
    path('api/blog/', include('blog.urls')),
    path('api/data/', include('products.urls')),
    path('api/promotional/', include('featured_products.urls')),
    path('api/site_details/', include('site_details.urls')),
    path('api/tracking_order/', include('tracking_order.urls')),
    path('api/vendor_catalog/', include('vendor_catalog.urls')),
]

urlpatterns+=static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)