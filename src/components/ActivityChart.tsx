
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', messages: 245 },
  { name: 'Tue', messages: 312 },
  { name: 'Wed', messages: 189 },
  { name: 'Thu', messages: 456 },
  { name: 'Fri', messages: 523 },
  { name: 'Sat', messages: 387 },
  { name: 'Sun', messages: 298 },
];

export const ActivityChart = () => {
  return (
    <div className="gradient-card p-6 rounded-lg animate-fade-in">
      <h3 className="text-xl font-semibold text-white mb-6">Weekly Activity</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#36393F" />
            <XAxis 
              dataKey="name" 
              stroke="#99AAB5"
              fontSize={12}
            />
            <YAxis 
              stroke="#99AAB5"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#2C2F33',
                border: '1px solid #36393F',
                borderRadius: '8px',
                color: '#FFFFFF'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="messages" 
              stroke="#5865F2" 
              strokeWidth={3}
              dot={{ fill: '#5865F2', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#5865F2', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
