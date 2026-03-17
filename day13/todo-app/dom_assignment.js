
// 과제: 
// HTML 파일에 연결하여 브라우저에서 실행하세요

// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

// 카운트 함수
function updateTaskCount() {
    const count = taskList.children.length;
    const taskCount = document.getElementById("taskCount");
    taskCount.textContent = `현재 할 일: ${count}개`;
}    

// 입력값 검증 및 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim();

    // 입력값이 비어있는지 확인
    if (taskText === "") {
        alert("내용을 입력하세요.");
        return;
    }
    
    // 새로운 리스트 아이템 생성
    const li = document.createElement("li");
        li.classList.add("task-item");
        taskList.appendChild(li);
        updateTaskCount();

    // 우선순위 표시
    const prioritySelect = document.getElementById("priority");
    const priority = prioritySelect.value;

    // 할 일 텍스트 추가
    const span = document.createElement("span");
        span.textContent = taskText;
        if (priority === "high") {
            span.style.color = "red";
        }
        li.appendChild(span);

    // 삭제 버튼 생성
    const removeBtn = document.createElement("button");
        removeBtn.textContent = "삭제";
        removeBtn.classList.add("delete-button");
        li.appendChild(removeBtn);

    // 삭제 버튼 이벤트 리스너
        removeBtn.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    // 완료 상태 토글 이벤트 리스너
    const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });
        li.appendChild(checkbox);

    // 요소 조립

    // 입력창 초기화
    taskInput.value = "";
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    const clearAll = taskList.querySelectorAll("li");
    clearAll.forEach(item => item.remove());
    updateTaskCount();
}

// 추가 버튼 클릭 이벤트 적용
addButton.onclick = addTask;

// 입력창에서 Enter 키 이벤트 적용 (event.key === 'Enter')
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// 전체 삭제 버튼 클릭 이벤트 적용
clearButton.onclick = clearAllTasks;
