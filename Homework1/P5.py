from datetime import datetime
from dateutil import parser
import pandas as pd
import re
import tkinter as tk
from tkinter import filedialog

output_file = 'P5.csv'

root = tk.Tk()
root.withdraw()

file_path = filedialog.askopenfilename()
data = pd.read_csv(file_path)

# Standardize date formats
def parse_date(date):
    try:
        return parser.parse(date).strftime('%Y-%m-%d')
    except (ValueError, TypeError):
        return None

data['DOB'] = data['DOB'].apply(lambda x: parse_date(x))
# print(data['DOB'].head())

data['JoinDate'] = data['JoinDate'].apply(lambda x: parse_date(x))
# print(data['JoinDate'].head())

# Standardize salary format
def clean_salary(salary):
    if isinstance(salary, str):
        salary = salary.lower().replace('k', '000')
        salary = salary.replace(',', '')
        salary = salary.replace('$', '')
    return salary.strip()

data['Salary'] = data['Salary'].apply(clean_salary)
data.rename(columns={'Salary': 'Salary ($)'}, inplace=True)
# print(data['Salary'].head())

# Clean up Emails
data['Email'] = data['Email'].apply(lambda x: str(x).replace(' ', ''))
# print(data['Email'].head())

# Standardize Weights, convert everything to kg (1 lb = 0.453592 kg)
def convert_weight(Weight):
    if 'lb' in str(Weight).lower() or 'pound' in str(Weight).lower():
        lbs = float(re.sub(r'[^0-9.]', '', str(Weight)))
        return str(round(lbs * 0.453592, 2)) + ' kg'
    else:
        return Weight

data['Weight'] = data['Weight'].apply(convert_weight)
# print(data['Weight'].head())

# Fill missing years of service
current_date = datetime.today()
data['Year of Service'] = data['JoinDate'].apply(
    lambda x: (current_date - pd.to_datetime(x)).days // 365 if pd.notnull(x) else 0
)
# print(data['Year of Service'].head())

# Save the cleaned data
data.to_csv(output_file, index=False)
print(f"Cleaned data saved to {output_file}")
