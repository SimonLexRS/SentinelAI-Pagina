{ status: 200 }
        );
    } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
        { error: 'Failed to send email', details: error instanceof Error ? error.message : error },
        { status: 500 }
    );
}
}
