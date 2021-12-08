from django.shortcuts import render
from sslcommerz_lib import SSLCOMMERZ
import os
# Create your views here.
def payment_session(data):
    sslcz = SSLCOMMERZ({ 'store_id': os.environ['STORE_ID'], 'store_pass': os.environ['SECRET_KEY'], 'issandbox': True })
    print(sslcz)