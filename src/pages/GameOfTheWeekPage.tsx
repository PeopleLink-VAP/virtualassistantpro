import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

type GameScreen = 'welcome' | 'gameplay' | 'win' | 'lose' | 'reward' | 'thankyou';

interface Task {
  id: string;
  text: string;
  emoji: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  emoji: string;
}

const tasks: Task[] = [
  { id: '1', text: 'Trả lời email khách hàng', emoji: '✉️', category: 'email' },
  { id: '2', text: 'Đặt lịch họp trên Zoom', emoji: '📅', category: 'scheduling' },
  { id: '3', text: 'Tạo bài đăng Instagram', emoji: '📱', category: 'social' },
  { id: '4', text: 'Chuẩn bị báo cáo chi tiêu tháng', emoji: '📊', category: 'reports' },
  { id: '5', text: 'Tìm nhà cung cấp mới ở Việt Nam', emoji: '🔍', category: 'research' },
];

const categories: Category[] = [
  { id: 'email', name: 'Email & Communication', emoji: '✉️' },
  { id: 'scheduling', name: 'Scheduling & Calendar', emoji: '📅' },
  { id: 'social', name: 'Social Media', emoji: '📱' },
  { id: 'reports', name: 'Reports & Finance', emoji: '📊' },
  { id: 'research', name: 'Research & Sourcing', emoji: '🔍' },
];

const GameOfTheWeekPage = () => {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('welcome');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerEmail, setPlayerEmail] = useState('');
  const [playerType, setPlayerType] = useState('');

  // Timer effect
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && currentScreen === 'gameplay') {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && currentScreen === 'gameplay') {
      setCurrentScreen('lose');
      setGameStarted(false);
    }
  }, [timeLeft, gameStarted, currentScreen]);

  // Check win condition
  useEffect(() => {
    if (completedTasks.length === tasks.length && currentScreen === 'gameplay') {
      setCurrentScreen('win');
      setGameStarted(false);
    }
  }, [completedTasks, currentScreen]);

  const startGame = () => {
    setCurrentScreen('gameplay');
    setGameStarted(true);
    setTimeLeft(60);
    setScore(0);
    setCompletedTasks([]);
  };

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTask(taskId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, categoryId: string) => {
    e.preventDefault();
    if (!draggedTask) return;

    const task = tasks.find(t => t.id === draggedTask);
    if (task && task.category === categoryId && !completedTasks.includes(draggedTask)) {
      setCompletedTasks([...completedTasks, draggedTask]);
      setScore(score + 10);
      toast.success('Chính xác! +10 điểm');
    } else if (task && task.category !== categoryId) {
      setScore(Math.max(0, score - 5));
      toast.error('Sai rồi! -5 điểm');
    }
    setDraggedTask(null);
  };

  const sendRewardEmail = async () => {
    try {
      const { error } = await supabase.functions.invoke('send-game-reward', {
        body: {
          name: playerName,
          email: playerEmail,
          playerType,
          score,
          timeLeft,
          isWinner: true
        }
      });

      if (error) throw error;
      setCurrentScreen('thankyou');
      toast.success('Email đã được gửi!');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  const sendLoseEmail = async (email: string) => {
    try {
      await supabase.functions.invoke('send-game-reward', {
        body: {
          name: 'Player',
          email,
          isWinner: false
        }
      });
    } catch (error) {
      console.error('Error sending lose email:', error);
    }
  };

  if (currentScreen === 'welcome') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4 text-primary">
              GAME OF THE WEEK - Task Sorting Game
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
              Bạn có thể giúp khách hàng làm các công việc của 1 VA?
            </h2>
            <p className="text-muted-foreground mb-8">
              Think you can handle a client's busy day? Test your VA skills now! 
              Match the tasks with the right categories before time runs out.
            </p>
            <Button onClick={startGame} size="lg" className="text-lg px-8 py-4">
              Start Game
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentScreen === 'gameplay') {
    const progress = (completedTasks.length / tasks.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl font-bold">
              ⏰ {timeLeft}s
            </div>
            <div className="text-2xl font-bold text-primary">
              🏆 {score} điểm
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Tasks Panel */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Công việc cần phân loại:</h3>
                <div className="space-y-3">
                  {tasks.map(task => (
                    <div
                      key={task.id}
                      draggable={!completedTasks.includes(task.id)}
                      onDragStart={(e) => handleDragStart(e, task.id)}
                      className={`p-3 rounded-lg border-2 cursor-move transition-all ${
                        completedTasks.includes(task.id)
                          ? 'bg-green-100 border-green-300 opacity-50'
                          : 'bg-white border-gray-200 hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <span className="text-lg mr-2">{task.emoji}</span>
                      {task.text}
                      {completedTasks.includes(task.id) && (
                        <span className="ml-2 text-green-600">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories Panel */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Thả vào đúng danh mục:</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <div
                      key={category.id}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, category.id)}
                      className="p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-primary/50 transition-colors min-h-[60px] flex items-center"
                    >
                      <span className="text-lg mr-3">{category.emoji}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Tiến độ:</span>
                <Progress value={progress} className="flex-1" />
                <span className="font-medium">{completedTasks.length}/{tasks.length}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentScreen === 'win') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-4">Xuất sắc!</h2>
            <p className="text-muted-foreground mb-6">
              Bạn đã xử lý mọi yêu cầu của khách hàng như một VA chuyên nghiệp.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 mb-6">
              <div className="text-lg font-semibold">{score} điểm</div>
              <div className="text-sm text-muted-foreground">Thời gian còn lại: {timeLeft}s</div>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setCurrentScreen('reward')} className="flex-1">
                Get Reward
              </Button>
              <Button onClick={startGame} variant="outline" className="flex-1">
                Play Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentScreen === 'lose') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">😅</div>
            <h2 className="text-2xl font-bold mb-4">Hơi khó đúng không?</h2>
            <p className="text-muted-foreground mb-6">
              Nghề VA không chỉ là kéo thả, mà còn cần kỹ năng và luyện tập
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={() => window.open('/va-journey', '_blank')} 
                className="flex-1"
              >
                Đọc thêm về VA
              </Button>
              <Button onClick={startGame} variant="outline" className="flex-1">
                Play Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentScreen === 'reward') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎁</div>
              <h2 className="text-2xl font-bold">Nhận ngay phần quà của bạn!</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Tên của bạn</label>
                <Input
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={playerEmail}
                  onChange={(e) => setPlayerEmail(e.target.value)}
                  placeholder="Nhập email của bạn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bạn là?</label>
                <Select value={playerType} onValueChange={setPlayerType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="sme">SME</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={sendRewardEmail} 
                className="w-full" 
                disabled={!playerName || !playerEmail || !playerType}
              >
                Claim Reward
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentScreen === 'thankyou') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-4">Hãy kiểm tra email!</h2>
            <p className="text-lg mb-4">Phần quà đã sẵn sàng</p>
            <p className="text-muted-foreground mb-6">
              Nếu bạn đang tham khảo về VA, hãy nhấn vào link khóa học để tìm hiểu nhé
            </p>
            <div className="flex gap-3">
              <Button 
                onClick={() => window.open('/vap-course', '_blank')} 
                className="flex-1"
              >
                Link to khóa học VA
              </Button>
              <Button onClick={startGame} variant="outline" className="flex-1">
                Play Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};

export default GameOfTheWeekPage;