import React, { useState } from "react";
import styles from "./login.module.scss";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`${styles.universe} my-5 py-2`}>
      <div className={styles.stars}></div>

      <div className={styles["cosmic-container"]}>
        <div className={styles["form-card"]}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${isLogin ? styles.active : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Đăng nhập
            </button>
            <button
              className={`${styles.tab} ${!isLogin ? styles.active : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Đăng ký
            </button>
          </div>

          {isLogin ? (
            <form className={`${styles["form-container"]} ${styles.active}`}>
              <h2 className={styles["form-title"]}>Đăng nhập</h2>
              <div className={styles["input-group"]}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className={styles["input-field"]}
                  required
                />
              </div>
              <div className={styles["input-group"]}>
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  className={styles["input-field"]}
                  required
                />
              </div>
              <a href="#" className={styles["forgot-link"]}>
                Quên mật khẩu?
              </a>
              <button type="submit" className={styles.btn}>
                Đăng nhập
              </button>
              <div className={styles["switch-form"]}>
                Chưa có tài khoản?{" "}
                <a onClick={() => setIsLogin(false)}>Đăng ký</a>
              </div>
            </form>
          ) : (
            <form className={`${styles["form-container"]} ${styles.active}`}>
              <h2 className={styles["form-title"]}>Đăng ký</h2>
              <div className={styles["input-group"]}>
                <label htmlFor="username">Tên người dùng</label>
                <input
                  type="text"
                  id="username"
                  className={styles["input-field"]}
                  required
                />
              </div>
              <div className={styles["input-group"]}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className={styles["input-field"]}
                  required
                />
              </div>
              <div className={styles["input-group"]}>
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  className={styles["input-field"]}
                  required
                />
              </div>
              <button type="submit" className={styles.btn}>
                Đăng ký
              </button>
              <div className={styles["switch-form"]}>
                Đã có tài khoản?{" "}
                <a onClick={() => setIsLogin(true)}>Đăng nhập</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
