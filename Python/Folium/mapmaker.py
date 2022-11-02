import pandas as pd
import folium

df = pd.read_excel("./data.xlsx")
df2 = pd.DataFrame(df.위도, df.경도)
print(df2)