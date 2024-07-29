import socket as sk

addr = '/tmp/moyu-chat.sock'

sock = sk.socket(sk.AF_UNIX, sk.SOCK_STREAM)
sock.bind(addr)

sock.listen(5)
while True:
    conn, _ = sock.accept()
    try:
        # 一次accept就是一个连接，不循环的话就是在等待下一个连接了（可以同时连接几个主机的）
        while True:
            data = conn.recv(1024).decode("utf-8")
            if not data:
                conn.close()
                break
            print(data)
    except Exception as e:
        print(e)
        conn.close()
