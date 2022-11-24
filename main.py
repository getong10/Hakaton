import eel


@eel.expose
def upload_file(image: str) -> str:
    print(image)
    return 'test result'


if __name__ == '__main__':
    eel.init('assets')
    eel.start('test.html')
