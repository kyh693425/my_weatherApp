
# 🌦️ My Weather App

## 📋 소개
**My Weather App**은 사용자가 현재 위치 또는 특정 지역의 날씨 정보를 간편하게 확인할 수 있도록 도와주는 간단한 날씨 애플리케이션입니다.  
React와 TypeScript를 사용해 제작되었으며, 직관적이고 깔끔한 UI를 제공합니다.

---

## 📦 주요 기능
1. **현재 날씨 조회**  
   - 사용자의 위치 정보를 활용해 실시간으로 현재 날씨를 확인합니다.

2. **지역별 날씨 검색**  
   - 검색창에 특정 지역을 입력하여 해당 지역의 날씨를 조회할 수 있습니다.

3. **날씨 상세 정보 제공**  
   - 기온, 습도, 풍속 등 자세한 날씨 정보를 제공합니다.

---

## 🛠️ 사용 기술
- **프론트엔드**: React, TypeScript
- **스타일링**: CSS
- **API**: OpenWeatherMap API

---

## 🖥️ 설치 및 실행
1. **리포지토리 클론**
   ```bash
   git clone https://github.com/kyh693425/my_weatherApp.git
   ```
2. **의존성 설치**
   ```bash
   npm install
   ```
3. **애플리케이션 실행**
   ```bash
   npm start
   ```
4. **브라우저에서 확인**  
   - [http://localhost:3000](http://localhost:3000)로 접속하여 실행 상태를 확인하세요.

---

# 📂 프로젝트 구조

```plaintext
my_weatherApp/
├── .expo/               # Expo 관련 설정 파일
├── .expo-shared/        # 공유된 Expo 설정 파일
├── assets/              # 이미지, 폰트 등 정적 자산 파일
├── video/               # 비디오 파일
├── .gitignore           # Git에서 추적하지 않을 파일 목록
├── App.js               # 메인 애플리케이션 컴포넌트
├── Loading.js           # 로딩 화면 컴포넌트
├── README.md            # 프로젝트 설명 파일 (영어)
├── README_kr.md         # 프로젝트 설명 파일 (한국어)
├── Weather.js           # 날씨 정보 표시 컴포넌트
├── app.json             # Expo 애플리케이션 설정 파일
├── babel.config.js      # Babel 설정 파일
├── package-lock.json    # 의존성 버전 고정 파일
└── package.json         # 프로젝트 설정 및 의존성 목록 파일
```

---

## 📮 기여 방법
1. 이 리포지토리를 포크합니다.
2. 새로운 브랜치를 생성합니다.
   ```bash
   git checkout -b feature/새로운기능
   ```
3. 변경 사항을 커밋합니다.
   ```bash
   git commit -m "Add 새로운 기능"
   ```
4. 원격 브랜치로 푸시합니다.
   ```bash
   git push origin feature/새로운기능
   ```
5. Pull Request를 생성합니다.

---

## 📜 라이선스
이 프로젝트는 [MIT 라이선스](./LICENSE)를 따릅니다.
