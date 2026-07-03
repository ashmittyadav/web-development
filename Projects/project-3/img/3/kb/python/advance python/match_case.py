# match case program

def http_status(status):
    match status:
        case 200:
            return "ok"
        case 404:
            return "error"
        case 500:
            return "internal server error"
        case _:
            return "unknown status"

print(http_status(200))