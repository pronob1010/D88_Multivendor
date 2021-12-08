from django.shortcuts import render
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import sklearn

plt.style.use("ggplot")

from sklearn.decomposition import TruncatedSVD
import json

ratings = pd.read_json('http://localhost:8000/api/data/rating/')
# ratings = ratings.dropna()
# ratings.head()
print(ratings)