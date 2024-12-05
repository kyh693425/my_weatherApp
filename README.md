
# 🌦️ My Weather App

## 📋 概要
**My Weather App**は、現在地または特定の地域の天気情報を簡単に確認できる天気アプリケーションです。  
ReactとTypeScriptで作成されており、直感的でシンプルなUIを提供します。

---

## 📦 主な機能
1. **現在の天気確認**  
   - ユーザーの位置情報を利用して、リアルタイムで現在の天気を確認します。

2. **地域ごとの天気検索**  
   - 検索バーで特定の地域を入力して、その地域の天気を確認できます。

3. **天気の詳細情報提供**  
   - 気温、湿度、風速などの詳細な天気情報を提供します。

---

## 🛠️ 使用技術
- **フロントエンド**: React, TypeScript
- **スタイリング**: CSS
- **API**: OpenWeatherMap API

---

## 🖥️ インストールと実行
1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/kyh693425/my_weatherApp.git
   ```
2. **依存関係をインストール**
   ```bash
   npm install
   ```
3. **アプリケーションを起動**
   ```bash
   npm start
   ```
4. **ブラウザで確認**  
   - [http://localhost:3000](http://localhost:3000)にアクセスして、アプリケーションを確認します。

---

# 📂 プロジェクト構造

```plaintext
my_weatherApp/
├── .expo/               # Expoに関連する設定ファイル
├── .expo-shared/        # 共有されたExpo設定ファイル
├── assets/              # 画像、フォントなどの静的アセットファイル
├── video/               # 天気背景用ビデオファイル
├── .gitignore           # Gitで追跡しないファイルリスト
├── App.js               # メインアプリケーションコンポーネント
├── Loading.js           # ローディング画面コンポーネント
├── README.md            # プロジェクト説明ファイル（日本語）
├── README_kr.md         # プロジェクト説明ファイル（韓国語）
├── Weather.js           # 天気情報表示コンポーネント
├── app.json             # Expoアプリケーション設定ファイル
├── babel.config.js      # Babel設定ファイル
├── package-lock.json    # 依存関係のバージョンを固定するファイル
└── package.json         # プロジェクト設定と依存関係リストファイル
```
