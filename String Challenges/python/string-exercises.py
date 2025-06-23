def abbr(name):
    if not name:
        return ""
    parts = name.split(" ")
    if len(parts) < 2:
        return name
    return parts[0] + " " + parts[-1][0] +"."

def capitalize_first(string):
    if not string:
        return ""
    return string[0].upper() + string[1:]
    

def is_blank_string(string):
    if string is None or string == "" or string.isspace():
        return True
    else:
        return False

def is_string(string):
    if isinstance(string, str):
        return True
    else:
        return False

def slice_string(string):
    if not string:
        return ""
    list = []
    for i in range(len(string)):
        list.append(string[i])
        if string[i] == 'g':
            return string[i:]


def truncate(string, length):
    if not string or length <= 0:
        return ""
    if len(string) <= length:
        return string
    return string[:length] + "..."