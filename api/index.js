const express = require('express');
const app = express();

const REAL_LUAU_SCRIPT = `
local Players = game:GetService("Players")
local Workspace = game:GetService("Workspace")
local UserInputService = game:GetService("UserInputService")
local CoreGui = game:GetService("CoreGui")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local VirtualInputManager = game:GetService("VirtualInputManager")

local LocalPlayer = Players.LocalPlayer
local ToolEvent = ReplicatedStorage:WaitForChild("Events"):WaitForChild("ToolEvent")

local _G = _G or {}
_G.AutoDigEnabled = false

if CoreGui:FindFirstChild("UnifiedSmartScriptGUI") then
    CoreGui.UnifiedSmartScriptGUI:Destroy()
end

local ScreenGui = Instance.new("ScreenGui")
ScreenGui.Name = "UnifiedSmartScriptGUI"
ScreenGui.ResetOnSpawn = false
ScreenGui.Parent = CoreGui

local function makeDraggable(frame)
    local dragging, dragInput, dragStart, startPos
    frame.InputBegan:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
            dragging = true
            dragStart = input.Position
            startPos = frame.Position
            input.Changed:Connect(function()
                if input.UserInputState == Enum.UserInputState.End then dragging = false end
            end)
        end
    end)
    frame.InputChanged:Connect(function(input)
        if input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch then
            dragInput = input
        end
    end)
    UserInputService.InputChanged:Connect(function(input)
        if input == dragInput and dragging then
            local delta = input.Position - dragStart
            frame.Position = UDim2.new(startPos.X.Scale, startPos.X.Offset + delta.X, startPos.Y.Scale, startPos.Y.Offset + delta.Y)
        end
    end)
end

local MinimizedIcon = Instance.new("TextButton")
MinimizedIcon.Name = "MinimizedIcon"
MinimizedIcon.Size = UDim2.new(0, 45, 0, 45)
MinimizedIcon.Position = UDim2.new(0, 240, 0, 15)
MinimizedIcon.BackgroundColor3 = Color3.fromRGB(35, 35, 40)
MinimizedIcon.Text = "\\226\\154\\153\\239\\184\\143"
MinimizedIcon.TextSize = 22
MinimizedIcon.TextColor3 = Color3.fromRGB(255, 255, 255)
MinimizedIcon.Visible = false
MinimizedIcon.Parent = ScreenGui

local IconCorner = Instance.new("UICorner")
IconCorner.CornerRadius = UDim.new(0, 10)
IconCorner.Parent = MinimizedIcon

local IconStroke = Instance.new("UIStroke")
IconStroke.Color = Color3.fromRGB(255, 170, 0)
IconStroke.Thickness = 2
IconStroke.Parent = MinimizedIcon

local MainFrame = Instance.new("Frame")
MainFrame.Name = "MainFrame"
MainFrame.Size = UDim2.new(0, 260, 0, 390)
MainFrame.Position = UDim2.new(0.4, 0, 0.3, 0)
MainFrame.BackgroundColor3 = Color3.fromRGB(25, 25, 25)
MainFrame.BorderSizePixel = 0
MainFrame.Parent = ScreenGui

local MainCorner = Instance.new("UICorner")
MainCorner.CornerRadius = UDim.new(0, 10)
MainCorner.Parent = MainFrame

local MainStroke = Instance.new("UIStroke")
MainStroke.Color = Color3.fromRGB(70, 70, 70)
MainStroke.Thickness = 1
MainStroke.Parent = MainFrame

makeDraggable(MainFrame)

local TitleBar = Instance.new("Frame")
TitleBar.Name = "TitleBar"
TitleBar.Size = UDim2.new(1, 0, 0, 35)
TitleBar.BackgroundColor3 = Color3.fromRGB(35, 35, 35)
TitleBar.BorderSizePixel = 0
TitleBar.Parent = MainFrame

local TitleCorner = Instance.new("UICorner")
TitleCorner.CornerRadius = UDim.new(0, 10)
TitleCorner.Parent = TitleBar

local TitleText = Instance.new("TextLabel")
TitleText.Size = UDim2.new(0.7, 0, 1, 0)
TitleText.Position = UDim2.new(0, 10, 0, 0)
TitleText.BackgroundTransparency = 1
TitleText.Text = "Multi-Tool Hub"
TitleText.TextColor3 = Color3.fromRGB(255, 255, 255)
TitleText.TextSize = 14
TitleText.Font = Enum.Font.SourceSansBold
TitleText.TextXAlignment = Enum.TextXAlignment.Left
TitleText.Parent = TitleBar

local MinimizeBtn = Instance.new("TextButton")
MinimizeBtn.Name = "MinimizeBtn"
MinimizeBtn.Size = UDim2.new(0, 30, 0, 30)
MinimizeBtn.Position = UDim2.new(1, -35, 0, 2.5)
MinimizeBtn.BackgroundTransparency = 1
MinimizeBtn.Text = "_"
MinimizeBtn.TextColor3 = Color3.fromRGB(200, 200, 200)
MinimizeBtn.TextSize = 20
MinimizeBtn.Font = Enum.Font.SourceSansBold
MinimizeBtn.Parent = TitleBar

local ToggleBtn = Instance.new("TextButton")
ToggleBtn.Name = "ToggleBtn"
ToggleBtn.Size = UDim2.new(1, -20, 0, 40)
ToggleBtn.Position = UDim2.new(0, 10, 0, 45)
ToggleBtn.BackgroundColor3 = Color3.fromRGB(150, 50, 50)
ToggleBtn.Text = "AUTO DIG: OFF"
ToggleBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
ToggleBtn.TextSize = 16
ToggleBtn.Font = Enum.Font.SourceSansBold
ToggleBtn.Parent = MainFrame

local BtnCorner = Instance.new("UICorner")
BtnCorner.CornerRadius = UDim.new(0, 6)
BtnCorner.Parent = ToggleBtn

local SuicideBtn = Instance.new("TextButton")
SuicideBtn.Name = "SuicideBtn"
SuicideBtn.Size = UDim2.new(1, -20, 0, 35)
SuicideBtn.Position = UDim2.new(0, 10, 0, 95)
SuicideBtn.BackgroundColor3 = Color3.fromRGB(180, 50, 50)
SuicideBtn.Text = "Reset Character"
SuicideBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
SuicideBtn.TextSize = 14
SuicideBtn.Font = Enum.Font.SourceSansBold
SuicideBtn.Parent = MainFrame

local SuicideCorner = Instance.new("UICorner")
SuicideCorner.CornerRadius = UDim.new(0, 6)
SuicideCorner.Parent = SuicideBtn

local ScrollFrame = Instance.new("ScrollingFrame")
ScrollFrame.Size = UDim2.new(1, -20, 1, -150)
ScrollFrame.Position = UDim2.new(0, 10, 0, 140)
ScrollFrame.BackgroundTransparency = 1
ScrollFrame.CanvasSize = UDim2.new(0, 0, 0, 0)
ScrollFrame.ScrollBarThickness = 4
ScrollFrame.Parent = MainFrame

local UIListLayout = Instance.new("UIListLayout")
UIListLayout.Padding = UDim.new(0, 5)
UIListLayout.SortOrder = Enum.SortOrder.LayoutOrder
UIListLayout.Parent = ScrollFrame

task.spawn(function()
    while true do
        task.wait(0.5)
        if _G.AutoDigEnabled then
            local character = LocalPlayer.Character
            local humanoid = character and character:FindFirstChildOfClass("Humanoid")
            if character and humanoid then
                if not character:FindFirstChildOfClass("Tool") then
                    local backpack = LocalPlayer:FindFirstChild("Backpack")
                    if backpack then
                        local tool = backpack:FindFirstChildOfClass("Tool") or backpack:GetChildren()[1]
                        if tool and tool:IsA("Tool") then
                            humanoid:EquipTool(tool)
                            task.wait(0.15)
                            pcall(function() ToolEvent:FireServer("Activated", false) end)
                            task.wait(0.1)
                            pcall(function() ToolEvent:FireServer("Activated", true) end)
                        end
                    end
                end
            end
        end
    end
end)

task.spawn(function()
    while true do
        task.wait(0.3)
        if _G.AutoDigEnabled then
            local character = LocalPlayer.Character
            if character and character:FindFirstChildOfClass("Tool") then
                pcall(function()
                    ToolEvent:FireServer("Activated", true)
                end)
            end
        end
    end
end)

MinimizeBtn.MouseButton1Click:Connect(function()
    MainFrame.Visible = false
    MinimizedIcon.Visible = true
end)

MinimizedIcon.MouseButton1Click:Connect(function()
    MinimizedIcon.Visible = false
    MainFrame.Visible = true
end)

ToggleBtn.MouseButton1Click:Connect(function()
    _G.AutoDigEnabled = not _G.AutoDigEnabled
    if _G.AutoDigEnabled then
        ToggleBtn.Text = "AUTO DIG: ON"
        ToggleBtn.BackgroundColor3 = Color3.fromRGB(0, 150, 75)
        pcall(function() ToolEvent:FireServer("Activated", false) end)
        task.wait(0.1)
        pcall(function() ToolEvent:FireServer("Activated", true) end)
    else
        ToggleBtn.Text = "AUTO DIG: OFF"
        ToggleBtn.BackgroundColor3 = Color3.fromRGB(150, 50, 50)
        pcall(function() ToolEvent:FireServer("Activated", false) end)
    end
end)

SuicideBtn.MouseButton1Click:Connect(function()
    local character = LocalPlayer.Character
    if character then
        local humanoid = character:FindFirstChildOfClass("Humanoid")
        if humanoid then
            humanoid.Health = 0
        end
    end
end)

local function teleportToCrate(crate)
    local character = LocalPlayer.Character
    if character and character:FindFirstChild("HumanoidRootPart") then
        local hrp = character.HumanoidRootPart
        if crate:IsA("BasePart") then
            hrp.CFrame = crate.CFrame + Vector3.new(0, 3, 0)
        elseif crate:IsA("Model") then
            hrp.CFrame = crate:GetPivot() + Vector3.new(0, 3, 0)
        end
    end
end

local function fastCollectAction()
    task.wait(0.2)
    for i = 1, 4 do
        VirtualInputManager:SendKeyEvent(true, Enum.KeyCode.E, false, game)
        task.wait(0.05)
        VirtualInputManager:SendKeyEvent(false, Enum.KeyCode.E, false, game)
        task.wait(0.05)
    end
end

local function updateCrateList()
    for _, child in ipairs(ScrollFrame:GetChildren()) do
        if child:IsA("TextButton") then
            child:Destroy()
        end
    end
    
    local count = 0
    for _, obj in ipairs(Workspace:GetChildren()) do
        if obj.Name == "Crate" then
            count = count + 1
            
            local CrateBtn = Instance.new("TextButton")
            CrateBtn.Size = UDim2.new(1, -5, 0, 30)
            CrateBtn.BackgroundColor3 = Color3.fromRGB(45, 45, 50)
            CrateBtn.Text = "  Crate ID: " .. tostring(obj:GetDebugId():sub(1, 5))
            CrateBtn.TextColor3 = Color3.fromRGB(230, 230, 230)
            CrateBtn.TextSize = 14
            CrateBtn.Font = Enum.Font.SourceSans
            CrateBtn.TextXAlignment = Enum.TextXAlignment.Left
            CrateBtn.Parent = ScrollFrame
            
            local BtnCorner = Instance.new("UICorner")
            BtnCorner.CornerRadius = UDim.new(0, 4)
            BtnCorner.Parent = CrateBtn
            
            CrateBtn.MouseButton1Click:Connect(function()
                if obj and obj.Parent then
                    teleportToCrate(obj)
                    task.spawn(fastCollectAction)
                else
                    CrateBtn.Text = "  Expired!"
                    CrateBtn.TextColor3 = Color3.fromRGB(200, 80, 80)
                    task.wait(0.5)
                    updateCrateList()
                end
            end)
        end
    end
    
    ScrollFrame.CanvasSize = UDim2.new(0, 0, 0, UIListLayout.AbsoluteContentSize.Y)
    TitleText.Text = "Hub (Crates: " .. tostring(count) .. ")"
end

updateCrateList()

Workspace.ChildAdded:Connect(function(child)
    if child.Name == "Crate" then
        task.wait(0.1)
        updateCrateList()
    end
end)

Workspace.ChildRemoved:Connect(function(child)
    if child.Name == "Crate" then
        updateCrateList()
    end
end)
`;

function dynamicObfuscate(source) {
    const randomID = () => "_" + Math.random().toString(36).substring(2, 9);
    let key_GUI = randomID();
    let key_DIG = randomID();
    let key_CRATE = randomID();
    
    let result = source;
    result = result.replace(/UnifiedSmartScriptGUI/g, key_GUI);
    result = result.replace(/AutoDigEnabled/g, key_DIG);
    result = result.replace(/teleportToCrate/g, key_CRATE);
    
    result = result.replace(/\r?\n|\r/g, " ");
    result = result.replace(/\s+/g, " "); 
    return result;
}

app.get('/api', (req, res) => {
    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    const freshCode = dynamicObfuscate(REAL_LUAU_SCRIPT);
    res.send(freshCode);
});

module.exports = app;


