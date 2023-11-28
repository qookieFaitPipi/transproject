import os

post = "https://backend.tpe.su"
prev = "http://127.0.0.1:1636"

def rewrite(path):
    for i in os.listdir(path):
        if os.path.isfile(path + i):
            if i.endswith("jsx"):
                with open(path + i) as f:
                    data = f.readlines()
                    new_data = [k.replace(prev, post) for k in data]
                with open(path + i, "w") as f:
                    for j in new_data:
                        f.write(j)
                print(path + i)
        else:
            rewrite(path + i + "/")

if __name__ == "__main__":
    rewrite("src/")
    #rewrite("Backend/patterns/")
