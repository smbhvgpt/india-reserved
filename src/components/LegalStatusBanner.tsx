import type { LegalStatus } from '../types';

interface LegalStatusBannerProps {
    status: LegalStatus;
    notes?: string;
}

// Status configuration for styling and messaging
const STATUS_CONFIG: Record<LegalStatus, {
    bgColor: string;
    borderColor: string;
    textColor: string;
    icon: string;
    title: string;
}> = {
    EFFECTIVE: {
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30',
        textColor: 'text-green-300',
        icon: '✓',
        title: 'Currently in Effect'
    },
    PENDING_APPROVAL: {
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/30',
        textColor: 'text-yellow-300',
        icon: '⏳',
        title: 'Pending Approval'
    },
    STAYED_BY_HC: {
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        textColor: 'text-red-300',
        icon: '⚖️',
        title: 'Stayed by High Court'
    },
    STAYED_BY_SC: {
        bgColor: 'bg-red-500/15',
        borderColor: 'border-red-500/40',
        textColor: 'text-red-200',
        icon: '⚖️',
        title: 'Stayed by Supreme Court'
    },
    UNDER_CHALLENGE: {
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/30',
        textColor: 'text-orange-300',
        icon: '⚠️',
        title: 'Under Legal Challenge'
    },
    '9TH_SCHEDULE': {
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/30',
        textColor: 'text-blue-300',
        icon: '🛡️',
        title: 'Protected under 9th Schedule'
    }
};

export function LegalStatusBanner({ status, notes }: LegalStatusBannerProps) {
    // Don't show banner for EFFECTIVE status (normal operation)
    if (status === 'EFFECTIVE') {
        return null;
    }

    const config = STATUS_CONFIG[status];

    return (
        <div className={`p-4 rounded-lg ${config.bgColor} border ${config.borderColor} mb-4`}>
            <div className="flex items-start gap-3">
                <span className="text-lg">{config.icon}</span>
                <div className="flex-1">
                    <div className={`font-semibold ${config.textColor} mb-1`}>
                        {config.title}
                    </div>
                    {notes && (
                        <p className="text-sm text-gray-400">
                            {notes}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LegalStatusBanner;
